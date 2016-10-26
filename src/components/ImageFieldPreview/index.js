import React from 'react';
import styles from './image-field-preview.scss';
import Image from 'components/Image';
import RemoveButton from 'components/RemoveButton';

const removeImageFromArray = (images, target) => images.filter(image => image.preview !== target);

const handleRemove = (field, url) => {
  field.onChange(removeImageFromArray(field.value, url));
};

const PetitionImageFieldPreview = ({ field, images }) => (
  <ul className={styles.root}>
    {images.map(image => (
      <li className={styles.item} key={image.name}>
        <Image src={image.preview} alt={image.name} />
        <div className={styles.remove}>
          <RemoveButton onClick={() => handleRemove(field, image.preview)} />
        </div>
      </li>
    ))}
  </ul>
);

export default PetitionImageFieldPreview;
