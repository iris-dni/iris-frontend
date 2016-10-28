import React from 'react';
import settings from 'settings';
import Dropzone from 'react-dropzone';
import ImageFieldPreview from 'components/ImageFieldPreview';
import IconAndInfo from 'components/IconAndInfo';
import styles from './image-field.scss';

const ImageField = React.createClass({
  handleDrop (accepted, rejected, field) {
    const { helper, uploadImage } = this.props;

    if (accepted.length) {
      accepted.map((image, index) => {
        uploadImage(image, index).then(({ file }) => {
          Object.assign(accepted[index], file);
          helper.onChange(accepted);
        });
      });
    }

    if (rejected.length) {
      helper.error = settings.petitionFields.image.invalidFileError;
      if (!helper.value) {
        helper.onChange(accepted);
      } else {
        helper.onBlur();
      }
    }
  },

  showInputField (value, maxItems) {
    return !value || value.length < maxItems;
  },

  render () {
    const { config, helper } = this.props;

    return (
      <div className={styles.root}>
        {helper.value && helper.value.length > 0 &&
          <ImageFieldPreview
            field={helper}
            images={helper.value}
          />
        }
        {this.showInputField(helper.value, config.maxItems) &&
          <Dropzone
            multiple={config.maxItems > 1}
            maxSize={config.maxSize}
            style={{}}
            accept={config.acceptedTypes.join(',')}
            onDrop={this.handleDrop}>
            <div className={styles.field}>
              <span className={styles.label}>
                <IconAndInfo info={config.html.placeholder} icon={'Photo'} />
              </span>
            </div>
          </Dropzone>
        }
      </div>
    );
  }
});

export default ImageField;
