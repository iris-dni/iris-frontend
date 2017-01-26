import getImageUrl from 'helpers/getImageUrl';

export default (petition) => {
  if (!petition.images || !petition.images[0] || !petition.images[0].data) {
    return {};
  }

  const primaryImage = petition.images[0];

  return {
    alt: petition.title,
    src: getImageUrl(primaryImage),
    ratio: primaryImage.data.info
  };
};
