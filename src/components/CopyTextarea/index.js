import React from 'react';
import styles from './copy-textarea.scss';
import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyTextarea = React.createClass({
  getInitialState: () => ({
    copied: false
  }),

  handleCopy () {
    this.refs.inputBox.select();
    this.setState({ copied: true });
  },

  render () {
    return (
      <div>
        <textarea className={styles.textarea} ref={'inputBox'}>
          {this.props.text}
        </textarea>
        <CopyToClipboard text={this.props.text} onCopy={this.handleCopy}>
          <div>
            {this.state.copied &&
              <Button type={'button'} block
                size={'compact'}
                brand={'link-copied'}>
                <ButtonIcon id={'Checkmark'} modifier={'success'}>
                  {this.props.copiedLabel}
                </ButtonIcon>
              </Button>
            }
            {!this.state.copied &&
              <Button type={'button'} block
                size={'compact'}
                brand={'email'}>
                <ButtonIcon id={'Link'}>
                  {this.props.copyLabel}
                </ButtonIcon>
              </Button>
            }
          </div>
        </CopyToClipboard>
      </div>
    );
  }
});

export default CopyTextarea;
