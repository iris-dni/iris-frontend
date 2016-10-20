import React from 'react';
import { connect } from 'react-redux';
import { ssoProviders } from 'settings';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import LoginModal from 'components/LoginModal';
import ShareModal from 'components/ShareModal';
import generateSsoProviders from 'helpers/generateSsoProviders';

const ModalWindowContainer = React.createClass({
  render () {
    const { type, title, intro, link, href, active, returnUrl, hideModalWindow } = this.props;
    return (
      <ModalWindow active={active} hideModalWindow={hideModalWindow}>
        {type === 'auth' &&
          <LoginModal
            title={title}
            intro={intro}
            ssoProviders={generateSsoProviders(ssoProviders, returnUrl)}
          />
        }
        {type === 'share' &&
          <ShareModal
            title={title}
            intro={intro}
            href={href}
            link={link}
          />
        }
      </ModalWindow>
    );
  }
});

export const mapStateToProps = ({ modalWindow }) => ({ modalWindow });

export const mapDispatchToProps = (dispatch) => {
  return { hideModalWindow: () => dispatch(hideModalWindow()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowContainer);
