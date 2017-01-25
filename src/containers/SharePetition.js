import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import Rezponsive from 'rezponsive';
import ShareButtons from 'components/ShareButtons';
import openShareWindow from 'helpers/sharing/openShareWindow';
import filterShareButtonsForTouch from 'helpers/sharing/filterShareButtonsForTouch';
import generateShareButtons from 'helpers/sharing/generateShareButtons';
import getPetitionURL from 'helpers/getPetitionURL';

const SharePetitionContainer = ({ openPopup, buttons, isTouch, petitionURL }) => (
  <ShareButtons
    openPopup={openPopup}
    buttons={filterShareButtonsForTouch(buttons, isTouch)}
    petitionURL={petitionURL}
  />
);

const mapStateToProps = ({ petition }) => ({
  openPopup: (url, event) => openShareWindow(url, event, settings.shareButtons.popupTitle),
  buttons: generateShareButtons(petition),
  petitionURL: getPetitionURL(petition.id)
});

SharePetitionContainer.propTypes = {
  openPopup: React.PropTypes.func,
  buttons: React.PropTypes.array
};

export default connect(
  mapStateToProps
)(Rezponsive(SharePetitionContainer));
