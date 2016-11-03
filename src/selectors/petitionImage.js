import getImageUrl from 'helpers/getImageUrl';

export default (petition) => {
  if (!petition.images || !petition.images[0]) {
    return;
  }

  return {
    alt: petition.title,
    src: getImageUrl(petition.images[0])
  };
};
