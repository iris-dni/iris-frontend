import React from 'react';
import settings from 'settings';
import styles from './image-field.scss';
import Dropzone from 'react-dropzone';
import ImageFieldPreview from 'components/ImageFieldPreview';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getFieldClassname from 'form/getFieldClassname';
import IconAndInfo from 'components/IconAndInfo';
import FormValidation from 'components/FormValidation';

const ERROR_FLASH_TIMEOUT = 3000;

const ImageField = React.createClass({

  errorTimeout: null,

  getInitialState: () => ({
    loading: false
  }),

  showFieldPreview (value) {
    return value && value.length > 0;
  },

  showInputField (value, maxItems) {
    return !value || value.length < maxItems;
  },

  handleError (fieldId, errorMessage) {
    const { formId, revalidateForm } = this.props;

    // Set error if given
    revalidateForm(formId, {
      [fieldId]: errorMessage || settings.flashMessages.genericError
    });
    // Clear validation after 3 seconds as field is not required
    this.errorTimeout = setTimeout(() => revalidateForm(formId, { [fieldId]: false }), ERROR_FLASH_TIMEOUT);
  },

  acceptFiles (accepted) {
    const { helper, config, formId, uploadImage, touchField } = this.props;
    // Clearer naming
    const fieldId = config.name;
    // Set field as 'touched'
    touchField(formId, fieldId);

    // Set loading state and begin upload
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
        }).catch(() => this.handleError(fieldId))
      );
    });
  },

  rejectFiles (rejected) {
    console.log(rejected);

    const { config } = this.props;
    // Clearer naming
    const fieldId = config.name;

    const errorMessage = settings.petitionFields.image.invalidFileError;

    this.handleError(fieldId, errorMessage);
  },

  handleDrop (accepted, rejected) {
    const { config, formId, touchField } = this.props;
    // Clearer naming
    const fieldId = config.name;
    // Remove error flash timeout
    clearTimeout(this.errorTimeout);

    // Set field as 'touched'
    touchField(formId, fieldId);

    if (accepted.length) {
      this.acceptFiles(accepted);
    }

    if (rejected.length) {
      this.rejectFiles(rejected);
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
          <div className={styles.wrapper}>
            <Dropzone
              multiple={config.maxItems > 1}
              maxSize={config.maxSize}
              style={{}}
              accept={config.acceptedTypes.join(',')}
              onDrop={this.handleDrop}>
              <div className={getFieldClassname(styles, 'field', fieldIsInvalid(helper))}>
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
            {fieldIsInvalid(helper) &&
              <FormValidation config={config} helper={helper} />
            }
          </div>
        }
      </div>
    );
  }
});

export default ImageField;
