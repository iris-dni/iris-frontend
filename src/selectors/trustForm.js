import petitionOwned from './petitionOwned';

export default (petition, me) => ({
  initialValues: {
    // For TrustSupportForm
    user: me || {},
    // For TrustPublishForm
    owner: petitionOwned(petition) ? petition.owner : me || {}
  },
  mobileConfirmed: (me && me.mobile_trusted) || false,
  petition: petition || {},
  me: me || {},
  trustedFields: {
    // For TrustSupportForm
    'user.email': (me && me.email_trusted) || false,
    'user.mobile': (me && me.mobile_trusted) || false,
    // For TrustPublishForm
    'owner.email': (me && me.email_trusted) || false,
    'owner.mobile': (me && me.mobile_trusted) || false
  }
});
