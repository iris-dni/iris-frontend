import React from 'react';
import { connect } from 'react-redux';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import LoginModal from 'components/LoginModal';
import ShareModal from 'components/ShareModal';
import generateSsoProviders from 'helpers/generateSsoProviders';

const ModalWindowContainer = React.createClass({
  render () {
    const { type, title, intro, link, active, returnUrl, hideModalWindow } = this.props;
    return (
      <ModalWindow active={active} hideModalWindow={hideModalWindow}>
        {type === 'auth' &&
          <LoginModal
            title={title}
            intro={intro}
            ssoProviders={generateSsoProviders(returnUrl || '')}
          />
        }
        {type === 'supported' &&
          <ShareModal
            title={title}
            intro={intro}
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
