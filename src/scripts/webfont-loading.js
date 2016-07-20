/* global FontFace, localStorage, XMLHttpRequest */
/* eslint-disable no-unused-vars */

// From https://github.com/filamentgroup/woff2-feature-test/
var supportsWoff2 = (function (win) {
  if (!('FontFace' in win)) {
    return false;
  }

  var f = new FontFace('t', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )', {});
  f.load().catch(function () {});

  return f.status === 'loading' || f.status === 'loaded';
}(this));

// This script must be placed in the HEAD above all external stylesheet declarations (link[rel=stylesheet])
// From http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html
function loadFont (fontName, woffUrl, woff2Url) {
  // 0. Many unsupported browsers should stop here
  var nua = navigator.userAgent;
  var noSupport = !window.addEventListener || // IE8 and below
    // Android Stock Browser below 4.4 and Opera Mini
    (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/));

  if (noSupport) {
    return;
  }

  // 1. Setting up localStorage
  var loSto = {};
  try {
    // We set up a proxy variable to help with localStorage, e.g. when cookies are disabled
    // and the browser prevents us accessing it.
    // Otherwise some exceptions can be thrown which completely prevent font loading.
    loSto = localStorage || {};
  } catch (e) { /* noop */ }

  var localStoragePrefix = 'x-font-' + fontName;
  var localStorageUrlKey = localStoragePrefix + 'url';
  var localStorageCssKey = localStoragePrefix + 'css';
  var storedFontUrl = loSto[localStorageUrlKey];
  var storedFontCss = loSto[localStorageCssKey];

  // 2. Setting up the <style> element, that we are using to apply the base64 encoded font data
  var styleElement = document.createElement('style');
  styleElement.rel = 'stylesheet';
  document.head.appendChild(styleElement);
  // Setting styleElement.textContent must be after this line, because of IE9 errors

  // 3. Checking whether the font data is already in localStorage and up-to-date
  if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
    // the css is still in the localStorage
    // AND it was loaded from one of the current URLs

    // 4. Applying the font style sheet
    styleElement.textContent = storedFontCss;
  } else {
    // The data was not present, or loaded from an obsolete URL
    // So we have to load it again

    // 5. Checking for WOFF2 support to know which URL we should use
    var url = (woff2Url && supportsWoff2)
      ? woff2Url // WOFF2 URL provided and supported
      : woffUrl; // only WOFF support

    // 6. Fetching the font data from the server
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // 7. Updating localStorage with the fresh data and applying the font data
        loSto[localStorageUrlKey] = url;
        loSto[localStorageCssKey] = styleElement.textContent = request.responseText;
      }
    };
    request.send();
  }
}
