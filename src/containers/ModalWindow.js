import React from 'react';
import { connect } from 'react-redux';
import { ssoProviders } from 'settings';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import LoginModal from 'components/LoginModal';
import ShareModal from 'components/ShareModal';
import EmbedModal from 'components/EmbedModal';
import generateSsoProviders from 'helpers/generateSsoProviders';

const ModalWindowContainer = React.createClass({
  render () {
    const { type, active, returnUrl, hideModalWindow } = this.props;

    if (!active) {
      return null;
    }

    return (
      <ModalWindow active={active} hideModalWindow={hideModalWindow}>
        {type === 'auth' &&
          <LoginModal {...this.props}
            ssoProviders={generateSsoProviders(ssoProviders, returnUrl)}
          />
        }
        {type === 'share' &&
          <ShareModal {...this.props} />
        }
        {type === 'embed' &&
          <EmbedModal {...this.props} />
        }
      </ModalWindow>
    );
  }
});

export const mapStateToProps = ({ modalWindow }) => ({ modalWindow });

export const mapDispatchToProps = (dispatch) => ({
  hideModalWindow: () => dispatch(hideModalWindow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowContainer);
