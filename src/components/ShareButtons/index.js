import React from 'react';
import styles from './share-buttons.scss';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';
import CopyPetitionLink from 'components/CopyPetitionLink';
import EmbedPetitionLink from 'containers/EmbedPetitionLink';

const ShareButtons = React.createClass({
  render () {
    const { openPopup, petitionURL, buttons = [] } = this.props;
    return (
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
        <li className={styles.item}>
          <CopyPetitionLink url={petitionURL} />
        </li>
        <li className={styles.item}>
          <EmbedPetitionLink />
        </li>
      </ul>
    );
  }
});

export default ShareButtons;
