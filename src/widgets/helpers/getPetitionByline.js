import settings from 'settings';
import getPetitionInfo from 'selectors/petitionInfo';

export default (petition) => {
  const petitionInfo = getPetitionInfo(petition);
  return settings.widgets.petition.byline
    .replace('%c', petitionInfo.city.label)
    .replace('%a', petitionInfo.owner);
};
