import React from 'react';
import styles from './image-field-preview.scss';
import Image from 'components/Image';
import RemovableItem from 'components/RemovableItem';
import getImageUrl from 'helpers/getImageUrl';
import isPortraitImage from 'helpers/isPortraitImage';

const getImageSource = (image) => getImageUrl(image) || image.preview;

const removeImageFromArray = (images, targetImage) => images.filter(image => getImageSource(image) !== getImageSource(targetImage));

const handleRemove = (field, image) => {
  const reducedArray = removeImageFromArray(field.value, image);
  field.onChange(reducedArray);
};

const PetitionImageFieldPreview = ({ field, images }) => (
  <ul className={styles.root}>
    {images.map((image, index) => (
      <li className={styles.item} key={index}>
        <RemovableItem inlineBlock
          action={() => handleRemove(field, image)}>
          {image.preview &&
            <img
              className={styles.preview}
              src={getImageSource(image)}
              alt={''}
            />
          }
          {!image.preview &&
            <Image
              src={getImageSource(image)}
              isPortrait={isPortraitImage(image)}
              attrs={{ op: 'noop' }}
              alt={image.name}
            />
          }
        </RemovableItem>
      </li>
    ))}
  </ul>
);

export default PetitionImageFieldPreview;
