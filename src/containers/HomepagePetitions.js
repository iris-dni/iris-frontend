import React from 'react';
import { connect } from 'react-redux';
import HomepagePetitions from 'components/HomepagePetitions';
import getPetitionsGroups from 'selectors/petitionsGroups';
import getPetitionsGroupsList from 'helpers/getPetitionsGroupsList';

const PETITIONS_GROUPS = getPetitionsGroupsList();

const HomepagePetitionsContainer = (props) => (
  <HomepagePetitions {...props} />
);

HomepagePetitionsContainer.propTypes = {
  groupedPetitions: React.PropTypes.object
};

export const mapStateToProps = ({ petitions }) => ({
  groupedPetitions: getPetitionsGroups(petitions, PETITIONS_GROUPS)
});

export default connect(
  mapStateToProps
)(HomepagePetitionsContainer);
