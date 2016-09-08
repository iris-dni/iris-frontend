import React from 'react';
import { connect } from 'react-redux';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import LoginModal from 'components/LoginModal';
import ShareModal from 'components/ShareModal';
import generateSsoProviders from 'helpers/generateSsoProviders';

const ModalWindowContainer = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && typeof this.props.hideModalWindow === 'function') {
      this.props.hideModalWindow();
    }
  },

  componentDidMount () {
    if (this.props.active) {
      document.documentElement.classList.add('disabled-scroll');
    }
    document.addEventListener('keydown', this.onEscape);
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.active) {
      document.documentElement.classList.add('disabled-scroll');
    } else {
      document.documentElement.classList.remove('disabled-scroll');
    }
  },

  componentWillUnmount () {
    document.documentElement.classList.remove('disabled-scroll');
    document.removeEventListener('keydown', this.onEscape);
  },

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
