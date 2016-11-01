import React from 'react';
import { get } from 'lodash/object';
import styles from './image-field-preview.scss';
import Image from 'components/Image';
import RemovableItem from 'components/RemovableItem';

const removeImageFromArray = (images, target) => images.filter(image => get(image, 'data.original_url', image.preview) !== target);

const handleRemove = (field, url) => {
  field.onChange(removeImageFromArray(field.value, url));
};

const PetitionImageFieldPreview = ({ field, images }) => (
  <ul className={styles.root}>
    {images.map((image, index) => (
      <li className={styles.item} key={index}>
        <RemovableItem action={() => handleRemove(field, get(image, 'data.original_url', image.preview))}>
          <Image src={get(image, 'data.original_url', image.preview)} alt={image.name} />
        </RemovableItem>
      </li>
    ))}
  </ul>
);

export default PetitionImageFieldPreview;
