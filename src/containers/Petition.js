import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, supportPetition } from 'actions/PetitionActions';
import Petition from 'components/Petition';
import getPetition from 'selectors/petition';

const PetitionContainer = React.createClass({
  // When the component gets added to the DOM,
  // fetch Petition if `id` is not defined.
  componentWillMount () {
    if (!this.props.id || !this.props.id !== this.props.params.id) {
      this.props.fetchPetition(this.props.params.id).then(() => {
        if (__CLIENT__ && this.props.location.query.intent === 'support') {
          this.props.supportPetition(this.props);
        }
      });
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

export const mapStateToProps = ({ petition }) => getPetition(petition);

// Add dispatchers to the component props,
// for fetching the data _client side_
export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  supportPetition: (petition) => dispatch(supportPetition(petition))
});

PetitionContainer.propTypes = {
  id: React.PropTypes.string,
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
