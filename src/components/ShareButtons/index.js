import React from 'react';
import styles from './share-buttons.scss';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';
import CopyPetitionLink from 'components/CopyPetitionLink';

const ShareButtons = React.createClass({
  getInitialState: () => ({
    copied: false
  }),

  handleCopy () {
    this.setState({ copied: true });
  },

  render () {
    const { openPopup, petitionURL, buttons = [] } = this.props;
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
            <CopyPetitionLink url={petitionURL} />
          </li>
        </ul>
      </div>
    );
  }
});

export default ShareButtons;
