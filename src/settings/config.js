export default {
  lang: 'en',
  charset: 'utf-8',
  title: 'iris-frontend',
  dateRange: '%s to %e',
  dateFormat: 'DD-MM-YYYY',
  authorLabel: 'by %a',
  supportersText: 'Supporters:',
  milestoneText: 'Target:',
  daysRemaining: 'days remaining',
  teaserSupportersText: 'Supporters',
  tesaserMilestoneText: 'Target',
  teaserDaysRemaining: 'days remaining',
  daysToVote: 30,
  // FIXME: find better way to import colors
  // without duplicating them
  colors: {
    black: '#222',
    white: '#fff',
    primary: '#2fcd0c',
    secondary: '#387fd1',
    tertiary: '#1100c4',
    dimmed: '#999',
    grey: '#ccc',
    greyLite: '#e5e5e5'
  },
  petitionsPage: {
    title: 'Petitions',
    createButton: 'Create a new Petition'
  },
  createPetitionPage: {
    title: 'Create a new Petition',
    intro: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.'
  },
  requiredText: 'You must complete this field',
  minLengthText: 'Must be %x characters or more',
  maxLengthText: 'Cannot be more than %x characters',
  petitionForm: {
    createButton: 'Create Petition',
    publishButton: 'Publish Petition',
    saveButton: 'Save Petition'
  },
  publishedPetitionPage: {
    title: 'Petition published',
    copy1: 'Your petition will be visible within the next 48 hours after being approved by an editor. In the meantime, share your petition and start collecting signatures:',
    previewButton: 'Preview your Petition'
  },
  petitionFields: {
    title: {
      label: 'Your petition title',
      placeholder: '',
      hint: 'Get people\'s attention by keeping it short and focussing on the solution.'
    },
    description: {
      label: 'Explain your idea or problem',
      placeholder: 'Tell everyone what you plan to change...',
      hint: 'In order to support your petition people will need to clearly understand why you care about it, and how it impacts the local community.'
    },
    suggested_solution: {
      label: 'Suggest your solution',
      placeholder: 'Tell everyone what should be done...',
      hint: 'Because you care a lot about your cause, you probably have some great ideas about how to solve it. Clearly outline the actions required to achieve your goal.'
    }
  },
  petition: {
    supportButton: 'Support Petition'
  },
  ssoProviders: [
    {
      text: 'Sign in with AZ Medien',
      url: 'http://aaz-azdev.lovelysystems.com/anmelden'
    }
  ],
  modalWindow: {
    closeButton: 'Close this dialog window'
  },
  auth: {
    afterLoginPath: '/',
    afterLogoutPath: '/'
  },
  loginPage: {
    title: 'Please sign in',
    intro: 'To begin creating your Petition please sign in using one of the services below. Afterwards, you won\'t be required to enter any contact information.'
  },
  flashMessages: {
    genericError: 'Sadly something failed, please try again!',
    petitionCreated: 'Great, your petition was created!',
    petitionUpdated: 'Your petition was updated'
  }
};
