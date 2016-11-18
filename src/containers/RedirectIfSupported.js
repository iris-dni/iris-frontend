import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchPetition, refreshPetition } from 'actions/PetitionActions';
import getPetition from 'selectors/petition';
import petitionUserSupport from 'selectors/petitionUserSupport';
import petitionPath from 'selectors/petitionPath';

const RedirectIfSupportedWrapper = (WrappedComponent) => {
  const RedirectIfSupported = React.createClass({
    componentWillMount () {
      this.props.refreshPetition(this.props.petition.id)
        .then(({ petition }) => {
          if (petitionUserSupport(petition)) {
            this.props.push(petitionPath(this.props.petition));
          }
        });
    },

    render () {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  });

  RedirectIfSupported.fetchData = ({ store, params }) => {
    return store.dispatch(fetchPetition(params.id));
  };

  const mapStateToProps = ({ petition }) => ({
    petition: getPetition(petition)
  });

  const mapDispatchToProps = (dispatch) => ({
    push: (url) => dispatch(push(url)),
    refreshPetition: (id) => dispatch(refreshPetition(id))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(RedirectIfSupported);
};

export default RedirectIfSupportedWrapper;
