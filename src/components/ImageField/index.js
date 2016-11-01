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

  showFieldPreview (value) {
    return value && value.length > 0;
  },

  showInputField (value, maxItems) {
    return !value || value.length < maxItems;
  },

  acceptFiles (accepted, uploadImage, helper) {
    this.setState({
      loading: true
    }, () => {
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

  rejectFiles (accepted, helper) {
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
      this.acceptFiles(accepted, uploadImage, helper);
    }

    if (rejected.length) {
      this.rejectFiles(accepted, helper);
    }
  },

  render () {
    const { config, helper } = this.props;

    return (
      <div className={styles.root}>
        {this.showFieldPreview(helper.value) &&
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
                  <span>{settings.petitionFields.image.loading}</span>
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
