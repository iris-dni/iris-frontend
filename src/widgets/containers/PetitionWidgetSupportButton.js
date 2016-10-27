import React from 'react';
import { connect } from 'react-redux';
import PetitionWidgetSupportButton from 'widgets/components/PetitionWidgetSupportButton';
import getPetition from 'selectors/petition';

const mapStateToProps = ({ petition }) => ({
  petition: getPetition(petition)
});

PetitionWidgetSupportButton.propTypes = {
  petition: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionWidgetSupportButton);
