import React from 'react';
import { connect } from 'react-redux';
import WidgetSupportButton from 'components/WidgetSupportButton';
import getPetition from 'selectors/petition';

const mapStateToProps = ({ petition }) => ({
  petition: getPetition(petition)
});

WidgetSupportButton.propTypes = {
  petition: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(WidgetSupportButton);
