import imageUrl from 'selectors/imageUrl';

export default (petition) => {
  if (!petition.images || !petition.images[0]) {
    return;
  }

  return {
    alt: petition.title,
    src: imageUrl(petition.images[0])
  };
};
