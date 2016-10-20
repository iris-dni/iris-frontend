import petitionOwned from './petitionOwned';

export default (petition, me) => ({
  initialValues: {
    // For TrustSupportForm
    user: me || {},
    // For TrustPublishForm
    owner: petitionOwned(petition) ? petition.owner : me || {}
  },
  petition: petition || {},
  me: me || {}
});
