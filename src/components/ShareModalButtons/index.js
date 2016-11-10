import React from 'react';
import styles from './share-modal-buttons.scss';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';

const ShareButtons = React.createClass({
  render () {
    const { openPopup, buttons = [] } = this.props;
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
      </ul>
    );
  }
});

export default ShareButtons;
