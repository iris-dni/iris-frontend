import React from 'react';
import { connect } from 'react-redux';
import ShareButtons from 'components/ShareButtons';
import openShareWindow from 'helpers/openShareWindow';
import generateShareLinks from 'helpers/generateShareLinks';

const POPUP_WINDOW_TITLE = 'Share this page';

const SharePetitionContainer = (props) => (
  <ShareButtons {...props} />
);

const openPopup = (url, event) => openShareWindow(url, event, POPUP_WINDOW_TITLE);

const mapStateToProps = ({ petition }) => ({
  openPopup: openPopup,
  buttons: generateShareLinks(petition.id)
});

SharePetitionContainer.propTypes = {
  openPopup: React.PropTypes.func
};

export default connect(
  mapStateToProps
)(SharePetitionContainer);
