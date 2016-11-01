import React from 'react';
import { get } from 'lodash/object';
import styles from './image-field-preview.scss';
import Image from 'components/Image';
import RemovableItem from 'components/RemovableItem';

const getImageSource = (image) => get(image, 'data.original_url', image.preview);

const removeImageFromArray = (images, targetImage) => images.filter(image => getImageSource(image) !== getImageSource(targetImage));

const handleRemove = (field, image) => {
  const reducedArray = removeImageFromArray(field.value, image);
  field.onChange(reducedArray);
};

const PetitionImageFieldPreview = ({ field, images }) => (
  <ul className={styles.root}>
    {images.map((image, index) => (
      <li className={styles.item} key={index}>
        <RemovableItem
          action={() => handleRemove(field, image)}>
          <Image
            src={getImageSource(image)}
            alt={image.name}
          />
        </RemovableItem>
      </li>
    ))}
  </ul>
);

export default PetitionImageFieldPreview;
