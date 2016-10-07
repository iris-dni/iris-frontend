import React from 'react';
import { connect } from 'react-redux';
import HomepagePetitions from 'components/HomepagePetitions';
import getPetitions from 'selectors/petitions';

const HomepagePetitionsContainer = (props) => (
  <HomepagePetitions {...props} />
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
