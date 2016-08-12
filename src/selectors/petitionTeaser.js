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
      metrics: {
        timeMetric: {
          figure: daysRemaining,
          percentage: 100 - calculatePercentage(daysRemaining, settings.daysToVote),
          aria: {
            minimum: 0,
            maximum: settings.daysToVote,
            value: settings.daysToVote - daysRemaining
          }
        },
        supportersMetric: {
          figure: petition.supporters.amount,
          percentage: calculatePercentage(
            petition.supporters.amount,
            petition.supporters.required
          ),
          aria: {
            minimum: 0,
            maximum: petition.supporters.required,
            value: petition.supporters.amount
          }
        }
      }
    }
  };
};
