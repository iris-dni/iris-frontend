import React from 'react';
import { connect } from 'react-redux';
import Rezponsive from 'rezponsive';
import ShareButtons from 'components/ShareButtons';
import openShareWindow from 'helpers/sharing/openShareWindow';
import filterShareButtonsForTouch from 'helpers/sharing/filterButtonsForTouch';
import generateShareButtons from 'helpers/sharing/generateShareButtons';
import getPetitionURL from 'helpers/getPetitionURL';

const POPUP_WINDOW_TITLE = 'Share this petition';

const SharePetitionContainer = ({ openPopup, buttons, isTouch }) => (
  <ShareButtons
    openPopup={openPopup}
    buttons={filterShareButtonsForTouch(buttons, isTouch)}
  />
);

const openPopup = (url, event) => openShareWindow(url, event, POPUP_WINDOW_TITLE);

const mapStateToProps = ({ petition }) => ({
  openPopup: openPopup,
  buttons: generateShareButtons(petition.id),
  petitionURL: getPetitionURL(petition.id)
});

SharePetitionContainer.propTypes = {
  openPopup: React.PropTypes.func,
  buttons: React.PropTypes.array
};

export default connect(
  mapStateToProps
)(Rezponsive(SharePetitionContainer));
