import React from 'react';
import Dropzone from 'react-dropzone';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import styles from './petition-image-field.scss';

const PetitionImageField = React.createClass({
  getClassname (element, error) {
    return [
      styles[element || 'input'],
      styles[error ? 'invalid' : 'valid']
    ].join(' ');
  },

  getInitialState: () => ({ value: '' }),

  onDrop (file) {
    console.log(file);
  },

  render () {
    const { config, helper } = this.props;

    return (
      <Dropzone
        className={this.getClassname('input', fieldIsInvalid(helper))}
        onDrop={this.onDrop}
        {...config.html}
        {...domOnlyProps(helper)}
      >
        Drop!
      </Dropzone>
    );
  }
});

export default PetitionImageField;
