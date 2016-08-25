import React from 'react';
import { connect } from 'react-redux';
import { hideModalWindow } from 'actions/ModalActions';
import ModalWindow from 'components/ModalWindow';
import Login from 'components/Login';

const ModalWindowContainer = (props) => (
  <ModalWindow active={props.active} hideModalWindow={props.hideModalWindow}>
    {props.type === 'authentication' &&
      <Login {...props} />
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
