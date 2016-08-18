import calculatePercentage from 'helpers/calculatePercentage';

export default (petition = {}) => {
  return {
    title: petition.title,
    percentComplete: calculatePercentage(
      petition.supporters && petition.supporters.amount,
      petition.supporters && petition.supporters.required
    )
  };
};
