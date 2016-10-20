import petitionOwned from './petitionOwned';

export default (petition, me, trust) => ({
  initialValues: {
    petitionId: petition && petition.id,
    // For TrustSupportForm
    user: me || {},
    // For TrustPublishForm
    owner: petitionOwned(petition) ? petition.owner : me || {}
  },
  petition: petition || {},
  submitting: trust && trust.isSubmitting,
  me: me || {}
});
