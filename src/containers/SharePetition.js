import React from 'react';
import { connect } from 'react-redux';
import ShareButtons from 'components/ShareButtons';
import openShareWindow from 'helpers/openShareWindow';

import {
  facebookShareButton,
  twitterShareButton,
  whatsappShareButton,
  emailShareButton
} from 'helpers/generateShareLinks';

const POPUP_WINDOW_TITLE = 'Share Petition';

const SharePetitionContainer = (props) => (
  <ShareButtons {...props} />
);

const openPopup = (url, event) => openShareWindow(url, event, POPUP_WINDOW_TITLE);

const mapStateToProps = ({ petition }) => ({
  openPopup: openPopup,
  buttons: [
    facebookShareButton(petition.id),
    twitterShareButton(petition.id),
    whatsappShareButton(petition.id),
    emailShareButton(petition.id)
  ]
});

SharePetitionContainer.propTypes = {
  openPopup: React.PropTypes.func
};

export default connect(
  mapStateToProps
)(SharePetitionContainer);
