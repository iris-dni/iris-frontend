export default (petition, me, trust) => ({
  initialValues: {
    petitionId: petition && petition.id,
    // For TrustSupportForm
    user: me || {},
    // For TrustPublishForm
    owner: me || {}
  },
  petition: petition || {},
  submitting: trust && trust.isSubmitting,
  me: me || {}
});
