import React from 'react';
import { connect } from 'react-redux';
import { showModalWindow } from 'actions/ModalActions';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';

const ModalTriggerContainer = (props) => (
  props.href
    ? <ButtonLink {...props} onClick={() => props.showModalWindow(props.modal, props.href)} />
    : <Button type='button' {...props} onClick={() => props.showModalWindow(props.modal)} />
);

export const mapStateToProps = (props) => (props);

export const mapDispatchToProps = (dispatch) => {
  return { showModalWindow: (modal, location) => dispatch(showModalWindow(modal, location)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTriggerContainer);
