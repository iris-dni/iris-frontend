import React from 'react';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';

const Petition = React.createClass({
  propTypes: {
    petition: React.PropTypes.object,
    fetchPetition: React.PropTypes.func
  },

  // When the component gets added to the DOM, fetch any data we need
  componentDidMount () {
    if (!this.props.petition) this.props.fetchPetition();
  },

  render () {
    return (
      <div>
        <em>Return a petition</em>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.suggestedSolution}</p>
      </div>
    );
  }
});

Petition.fetchData = ({ store }) => {
  return store.dispatch(fetchPetition());
};

const mapStateToProps = ({ petition }) => ({
  id: petition.id,
  title: petition.title,
  description: petition.description,
  suggestedSolution: petition.suggested_solution
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
  return { fetchPetition: () => dispatch(fetchPetition()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Petition);
