import React from 'react';
import { connect } from 'react-redux';
import PetitionGroup from 'components/PetitionGroup';
import getPetitionGroup from 'selectors/petitionGroup';

const PetitionGroupContainer = (props) => (
  <PetitionGroup {...props} />
);

PetitionGroupContainer.propTypes = {
  petitions: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  linkText: React.PropTypes.string,
  linkHref: React.PropTypes.string
};

export const mapStateToProps = ({ petitions }, ownProps) => getPetitionGroup(petitions, ownProps.group);

export default connect(
  mapStateToProps
)(PetitionGroupContainer);
