export default (petition, me, trust) => ({
  initialValues: {
    petitionId: petition && petition.id,
    user: me || {}
  },
  petition: petition || {},
  submitting: trust && trust.isSubmitting,
  me: me || {}
});
