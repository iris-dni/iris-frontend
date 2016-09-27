const openPopup = (url, title) => {
  const width = 550;
  const height = 420;
  const top = (window.screen.height / 2) - (height / 2);
  const left = (window.screen.width / 2) - (width / 2);
  window.open(
    url,
    title,
    'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
  );
};

export default (url, event, title) => {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  if (url) {
    openPopup(url, title || '');
  }
};
