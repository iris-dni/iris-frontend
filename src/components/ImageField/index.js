import React from 'react';
import settings from 'settings';
import Dropzone from 'react-dropzone';
import ImageFieldPreview from 'components/ImageFieldPreview';
import IconAndInfo from 'components/IconAndInfo';
import styles from './image-field.scss';

const ImageField = React.createClass({
  getInitialState: () => ({
    loading: false
  }),

  handleAccepted (accepted, uploadImage, helper) {
    this.setState({ loading: true }, () => {
      accepted.map((image, index) =>
        uploadImage(image, index).then(({ file }) => {
          Object.assign(accepted[index], file);
          helper.onChange(accepted);
          if (index === accepted.length - 1) {
            this.setState({ loading: false });
          }
        })
      );
    });
  },

  handleRejected (accepted, helper) {
    helper.error = settings.petitionFields.image.invalidFileError;
    if (!helper.value) {
      helper.onChange(accepted);
    } else {
      helper.onBlur();
    }
  },

  handleDrop (accepted, rejected, field) {
    const { helper, uploadImage } = this.props;

    if (accepted.length) {
      this.handleAccepted(accepted, uploadImage, helper);
    }

    if (rejected.length) {
      this.handleRejected(accepted, helper);
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
                {this.state.loading &&
                  <span>Loading...</span>
                }
                {!this.state.loading &&
                  <IconAndInfo info={config.html.placeholder} icon={'Photo'} />
                }
              </span>
            </div>
          </Dropzone>
        }
      </div>
    );
  }
});

export default ImageField;
