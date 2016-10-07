import React from 'react';
import { connect } from 'react-redux';
import TeaserGrid from 'components/TeaserGrid';
import getPetitions from 'selectors/petitions';

const HomepagePetitionsContainer = (props) => (
  <TeaserGrid {...props} />
);

HomepagePetitionsContainer.propTypes = {
  petitions: React.PropTypes.array
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || [])
});

export default connect(
  mapStateToProps
)(HomepagePetitionsContainer);
