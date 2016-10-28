import React from 'react';
import styles from './image-field-preview.scss';
import Image from 'components/Image';
import RemovableItem from 'components/RemovableItem';

const removeImageFromArray = (images, target) => images.filter(image => image.preview !== target);

const handleRemove = (field, url) => {
  field.onChange(removeImageFromArray(field.value, url));
};

const PetitionImageFieldPreview = ({ field, images }) => (
  <ul className={styles.root}>
    {images.map(image => (
      <li className={styles.item} key={image.name}>
        <RemovableItem action={() => handleRemove(field, image.preview)}>
          <Image src={image.original_url} alt={image.name} />
        </RemovableItem>
      </li>
    ))}
  </ul>
);

export default PetitionImageFieldPreview;
