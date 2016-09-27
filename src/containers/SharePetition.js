import React from 'react';
import { connect } from 'react-redux';
import ShareButtons from 'components/ShareButtons';
import openShareWindow from 'helpers/sharing/openShareWindow';
import generateShareButtons from 'helpers/sharing/generateShareButtons';

const POPUP_WINDOW_TITLE = 'Share this petition';

const SharePetitionContainer = (props) => (
  <ShareButtons {...props} />
);

const openPopup = (url, event) => openShareWindow(url, event, POPUP_WINDOW_TITLE);

const mapStateToProps = ({ petition }) => ({
  openPopup: openPopup,
  buttons: generateShareButtons(petition.id)
});

SharePetitionContainer.propTypes = {
  openPopup: React.PropTypes.func
};

export default connect(
  mapStateToProps
)(SharePetitionContainer);
