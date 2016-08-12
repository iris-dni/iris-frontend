import settings from 'settings';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionDaysRemaining from './petitionDaysRemaining';
import getPetitionAuthor from './petitionAuthor';

export default (petition) => {
  if (!petition || !petition.id) {
    return {};
  }

  const daysRemaining = getPetitionDaysRemaining(petition.dc || {});

  return {
    id: petition.id,
    link: `/petitions/${petition.id}`,
    title: petition.title,
    footer: {
      info: {
        city: petition.city,
        owner: getPetitionAuthor(petition.owner || {})
      },
      dialTime: {
        figure: daysRemaining,
        percentage: calculatePercentage(daysRemaining, settings.daysToVote)
      },
      dialSupporters: {
        figure: petition.supporters.amount,
        percentage: calculatePercentage(
          petition.supporters.amount,
          petition.supporters.required
        )
      }
    }
  };
};
