import React from 'react';
import { translation } from 'translations';
import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyPetitionLink = React.createClass({
  getInitialState: () => ({
    copied: false
  }),

  handleCopy () {
    this.setState({ copied: true });
  },

  render () {
    return (
      <CopyToClipboard text={this.props.url} onCopy={this.handleCopy}>
        <div>
          {this.state.copied &&
            <Button type={'button'} block
              size={'compact'}
              brand={'link-copied'}>
              <ButtonIcon id={'Checkmark'} modifier={'success'}>
                {translation('shareButtons.link.copiedLabel')}
              </ButtonIcon>
            </Button>
          }
          {!this.state.copied &&
            <Button type={'button'} block
              size={'compact'}
              brand={'email'}>
              <ButtonIcon id={'Link'}>
                {translation('shareButtons.link.label')}
              </ButtonIcon>
            </Button>
          }
        </div>
      </CopyToClipboard>
    );
  }
});

export default CopyPetitionLink;
