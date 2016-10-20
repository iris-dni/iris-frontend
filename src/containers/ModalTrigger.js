import React from 'react';
import { connect } from 'react-redux';
import { showModalWindow } from 'actions/ModalActions';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';

const getOnClickFunction = ({
  authenticating,
  me,
  modal,
  href,
  onClick,
  showModalWindow
}) => {
  // If we are authenticating and me exists,
  // don't trigger modal (just link instead)
  if (authenticating && me && me.id) {
    return (
      onClick
        ? { onClick: onClick }
        : {}
    );
  }

  return {
    onClick: () => showModalWindow(modal, (href || ''))
  };
};

const ModalTriggerContainer = (props) => (
  props.href
    ? <ButtonLink {...props} {...getOnClickFunction(props)} />
    : <Button type='button' {...props} {...getOnClickFunction(props)} />
);

export const mapStateToProps = ({ me }) => ({ me });

export const mapDispatchToProps = (dispatch) => ({
  showModalWindow: (modal, location) => dispatch(showModalWindow(modal, location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTriggerContainer);
