import settings from 'settings';

export default ({ pending, total, required, responseDaysPending }) => {
  const key = pending ? 'pending' : 'arrived';

  return settings.petitionResponseStatus[key].title;
};
