import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchPetition } from 'actions/PetitionActions';
import getPetition from 'selectors/petition';
import petitionPublished from 'selectors/petitionPublished';
import petitionPath from 'selectors/petitionPath';

const RedirectIfPublishedWrapper = (WrappedComponent) => {
  const RedirectIfPublished = React.createClass({
    componentWillMount () {
      if (petitionPublished(this.props.petition)) {
        this.props.push(petitionPath(this.props.petition));
      }
    },

    render () {
      return (
        <WrappedComponent petition={this.props.petition} />
      );
    }
  });

  RedirectIfPublished.fetchData = ({ store, params }) => {
    return store.dispatch(fetchPetition(params.id));
  };

  const mapStateToProps = ({ petition }) => ({
    petition: getPetition(petition)
  });

  const mapDispatchToProps = (dispatch) => ({
    push: (url) => dispatch(push(url))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(RedirectIfPublished);
};

export default RedirectIfPublishedWrapper;
