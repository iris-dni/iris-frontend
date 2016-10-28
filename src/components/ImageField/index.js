import React from 'react';
import settings from 'settings';
import Dropzone from 'react-dropzone';
import ImageFieldPreview from 'components/ImageFieldPreview';
import IconAndInfo from 'components/IconAndInfo';
import styles from './image-field.scss';
import fileRepository from 'services/api/repositories/file';

const handleDrop = (accepted, rejected, field) => {
  if (accepted.length) {
    accepted.map((image, index) => {
      fileRepository.create(image).then(res => {
        accepted[index].id = res.data.id;
        field.onChange(accepted);
      });
    });
  }

  if (rejected.length) {
    field.error = settings.petitionFields.image.invalidFileError;
    if (!field.value) {
      field.onChange(accepted);
    } else {
      field.onBlur();
    }
  }
};

const showInputField = (value, maxItems) => !value || value.length < maxItems;

const ImageField = ({ config, helper }) => (
  <div className={styles.root}>
    {helper.value && helper.value.length > 0 &&
      <ImageFieldPreview
        field={helper}
        images={helper.value}
      />
    }
    {showInputField(helper.value, config.maxItems) &&
      <Dropzone
        multiple={config.maxItems > 1}
        maxSize={config.maxSize}
        style={{}}
        accept={config.acceptedTypes.join(',')}
        onDrop={(accepted, rejected) => handleDrop(accepted, rejected, helper)}>
        <div className={styles.field}>
          <span className={styles.label}>
            <IconAndInfo info={config.html.placeholder} icon={'Photo'} />
          </span>
        </div>
      </Dropzone>
    }
  </div>
);

export default ImageField;
