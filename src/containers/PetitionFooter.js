import React from 'react';
import { connect } from 'react-redux';
import PetitionFooter from 'components/PetitionFooter';

const PetitionFooterContainer = ({ links }) => (
  links.length
    ? <PetitionFooter links={links} />
    : null
);

const mapStateToProps = ({ petition }) => ({
  links: petition.links || []
});

PetitionFooterContainer.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default connect(
  mapStateToProps
)(PetitionFooterContainer);
