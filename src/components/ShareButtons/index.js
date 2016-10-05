import React from 'react';
import styles from './share-buttons.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';

const ShareButtons = React.createClass({
  getInitialState: () => ({
    copied: false
  }),

  handleCopy () {
    this.setState({ copied: true });
  },

  render () {
    const { openPopup, buttons = [], petitionURL } = this.props;
    return (
      <div className={styles.root}>
        <ul className={styles.list}>
          {buttons.map(button => (
            <li className={styles.item} key={button.brand}>
              <ButtonLink block external
                onClick={button.popup
                  ? openPopup.bind(this, button.href)
                  : null
                }
                href={button.href}
                size={'compact'}
                brand={button.brand}>
                <ButtonIcon id={button.icon}>
                  {button.label}
                </ButtonIcon>
              </ButtonLink>
            </li>
          ))}
          <li className={styles.item} key={'link'}>
            <CopyToClipboard text={petitionURL} onCopy={this.handleCopy}>
              <div>
                {this.state.copied &&
                  <Button type={'button'} block
                    size={'compact'}
                    brand={'link-copied'}>
                    <ButtonIcon id={'Checkmark'} modifier={'success'}>
                      {'Link copied'}
                    </ButtonIcon>
                  </Button>
                }
                {!this.state.copied &&
                  <Button type={'button'} block
                    size={'compact'}
                    brand={'email'}>
                    <ButtonIcon id={'Link'}>
                      {'Share by URL'}
                    </ButtonIcon>
                  </Button>
                }
              </div>
            </CopyToClipboard>
          </li>
        </ul>
      </div>
    );
  }
});

export default ShareButtons;
