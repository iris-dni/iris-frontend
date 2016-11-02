import getImageUrl from 'helpers/getImageUrl';
import isPortraitImage from 'helpers/isPortraitImage';

export default (petition) => {
  if (!petition.images || !petition.images[0]) {
    return;
  }

  return {
    alt: petition.title,
    src: getImageUrl(petition.images[0]),
    isPortrait: isPortraitImage(petition.images[0])
  };
};
