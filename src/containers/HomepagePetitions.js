import React from 'react';
import { connect } from 'react-redux';
import HomepagePetitions from 'components/HomepagePetitions';
import getPetitionsGroups from 'selectors/petitionsGroups';

export const PETITION_GROUPS = [
  {
    group: 'trending',
    query: {
      state: 'current',
      limit: 6,
      sort: 'trending'
    }
  },
  {
    group: 'latest',
    query: {
      state: 'current',
      limit: 3,
      sort: 'created'
    }
  }
];

const HomepagePetitionsContainer = (props) => (
  <HomepagePetitions {...props} />
);

HomepagePetitionsContainer.propTypes = {
  petitionGroups: React.PropTypes.object
};

export const mapStateToProps = ({ petitions }) => ({
  petitionGroups: getPetitionsGroups(petitions, PETITION_GROUPS)
});

export default connect(
  mapStateToProps
)(HomepagePetitionsContainer);
