import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import Petition from 'components/Petition';
import getPetition from 'selectors/petition';

const PetitionContainer = React.createClass({
  // When the component gets added to the DOM,
  // fetch Petition if `id` is not defined.
  componentDidMount () {
    if (!this.props.id || !this.props.id !== this.props.params.id) {
      this.props.fetchPetition(this.props.params.id);
    }
  },

  render () {
    return (
      <div>
        <Helmet
          title={this.props.browserTitle}
          script={[{
            'type': 'application/ld+json',
            'innerHTML': JSON.stringify(this.props.schema || {})
          }]}
        />
        <Petition {...this.props} />
      </div>
    );
  }
});

PetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

const mapStateToProps = ({ petition }) => {
  return getPetition(petition);
};

// Add dispatchers to the component props,
// for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
  return { fetchPetition: (id) => dispatch(fetchPetition(id)) };
};

PetitionContainer.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  suggestedSolution: React.PropTypes.string,
  dateRange: React.PropTypes.string,
  city: React.PropTypes.string,
  fetchPetition: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionContainer);
