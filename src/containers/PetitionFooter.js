import React from 'react';
import { connect } from 'react-redux';
import PetitionFooter from 'components/PetitionFooter';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';

const PetitionFooterContainer = ({ links, mentions }) => (
  links.length || mentions.length
    ? <PetitionFooter links={links} mentions={mentions} />
    : null
);

const mapStateToProps = ({ petition }) => ({
  links: wrapPetitionLinks(petition.links || []),
  mentions: wrapPetitionLinks(petition.mentions || [])
});

PetitionFooterContainer.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object),
  mentions: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default connect(
  mapStateToProps
)(PetitionFooterContainer);
