export default (petition, me, trust) => ({
  initialValues: {
    petitionId: petition && petition.id,
    user: me || {}
  },
  submitting: trust.isSubmitting,
  me: me || {}
});
