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
  petitions: React.PropTypes.shape({
    latest: React.PropTypes.array,
    trending: React.PropTypes.array
  })
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitionsGroups(petitions, PETITIONS_GROUPS)
});

export default connect(
  mapStateToProps
)(HomepagePetitionsContainer);
