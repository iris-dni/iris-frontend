export default (petition, me, trust) => ({
  initialValues: {
    petitionId: petition && petition.id,
    user: me || {}
  },
  petitionId: petition && petition.id,
  submitting: trust.isSubmitting,
  me: me || {}
});
