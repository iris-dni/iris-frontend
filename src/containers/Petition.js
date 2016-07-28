import React from 'react';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';

const Petition = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    suggestedSolution: React.PropTypes.string,
    fetchPetition: React.PropTypes.func
  },

  // When the component gets added to the DOM, fetch any data we need
  componentDidMount () {
    if (!this.props.id) {
      this.props.fetchPetition(this.props.params.id);
    }
  },

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.suggestedSolution}</p>
      </div>
    );
  }
});

Petition.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

const mapStateToProps = ({ petition }) => ({
  id: petition.id,
  title: petition.title,
  description: petition.description,
  suggestedSolution: petition.suggested_solution
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
  return { fetchPetition: (id) => dispatch(fetchPetition(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Petition);
