/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(e){"use strict";var t=function(t,n,r){function f(e){if(i.body)return e();setTimeout(function(){f(e)})}function c(){s.addEventListener&&s.removeEventListener("load",c),s.media=r||"all"}var i=e.document,s=i.createElement("link"),o;if(n)o=n;else{var u=(i.body||i.getElementsByTagName("head")[0]).childNodes;o=u[u.length-1]}var a=i.styleSheets;s.rel="stylesheet",s.href=t,s.media="only x",f(function(){o.parentNode.insertBefore(s,n?o:o.nextSibling)});var l=function(e){var t=s.href,n=a.length;while(n--)if(a[n].href===t)return e();setTimeout(function(){l(e)})};return s.addEventListener&&s.addEventListener("load",c),s.onloadcssdefined=l,l(c),s};typeof exports!="undefined"?exports.loadCSS=t:e.loadCSS=t})(typeof global!="undefined"?global:this);