import React from 'react';
import Dropzone from 'react-dropzone';
import ImageFieldPreview from 'components/ImageFieldPreview';
import IconAndInfo from 'components/IconAndInfo';
import styles from './image-field.scss';

const handleDrop = (accepted, rejected, field) => {
  field.onChange(accepted);
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
