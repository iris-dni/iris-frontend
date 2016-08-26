import React from 'react';
import { connect } from 'react-redux';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import Login from 'components/Login';
import generateSsoProviders from 'helpers/generateSsoProviders';

const ModalWindowContainer = ({ type, active, location, hideModalWindow }) => (
  <ModalWindow active={active} hideModalWindow={hideModalWindow}>
    {type === 'auth' &&
      <Login ssoProviders={generateSsoProviders(location)} />
    }
  </ModalWindow>
);

export const mapStateToProps = ({ modalWindow }) => ({ modalWindow });

export const mapDispatchToProps = (dispatch) => {
  return { hideModalWindow: () => dispatch(hideModalWindow()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowContainer);
