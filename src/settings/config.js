export default {
  locale: 'en-US',
  charset: 'utf-8',
  title: 'iris-frontend',
  twitterAccount: 'azmedien',
  dateRange: '%s to %e',
  startDate: 'Started on %d',
  endDate: 'Ending on %d',
  runningTime: 'Petitions run for 30 days',
  dateFormat: 'DD-MM-YYYY',
  authorLabel: 'by %a',
  supportersText: 'Supporters:',
  milestoneText: 'Target:',
  daysRemaining: 'days remaining',
  teaserSupportersText: 'Supporters',
  tesaserMilestoneText: 'Target',
  teaserDaysRemaining: 'days remaining',
  daysToVote: 30,
  optionalLabel: '(optional)',
  requiredText: 'You must complete this field',
  minLengthText: 'Must be %x characters or more',
  maxLengthText: 'Cannot be more than %x characters',
  petitionsPerPage: 12,
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
    title: 'Browse %x petitions %y',
    winning: 'winning',
    current: 'current',
    past: 'past',
    all: 'all',
    filterBy: 'Show me',
    orderBy: 'Order by',
    filters: {
      city: {
        label: 'Select a city',
        placeholder: 'Enter name or ZIP'
      },
      winning: 'Winning petitions',
      current: 'Current petitions',
      past: 'Past petitions',
      all: 'All petitions',
      date: 'Most recent',
      supportersAmount: 'Most supported'
    }
  },
  petitionPage: {
    description: 'Description:',
    suggestedSolution: 'Suggested solution:',
    supportButton: {
      text: 'Support Petition',
      supportedText: 'Supported',
      unsupportableText: 'Petition Ended',
      modal: {
        title: 'Please log in',
        intro: 'In order to sign the Petition, we need you to log in using one of the services below..'
      }
    }
  },
  newPetitionPage: {
    title: 'Create a new Petition',
    intro: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.'
  },
  previewPetitionPage: {
    editButton: {
      text: 'Edit Petition'
    },
    publishButton: {
      text: 'Publish Petition',
      modal: {
        intro: 'To publish a Petition please sign in using one of the services below. Afterwards, you woni\'t be required to enter any contact information.'
      }
    }
  },
  editPetitionPage: {
    title: 'Edit Petition',
    intro: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.'
  },
  petitionForm: {
    createButton: {
      text: 'Create Petition'
    },
    publishButton: {
      text: 'Publish Petition',
      modal: {
        intro: 'To publish a Petition please sign in using one of the services below. Afterwards, you woni\'t be required to enter any contact information.'
      }
    },
    saveButton: {
      text: 'Preview Petition'
    }
  },
  publishedPetitionPage: {
    title: 'Your petition was successfully published',
    intro: 'It can already be supported and will appear online within 48 hours. Until then, why not share it with others to start gaining support?',
    preview: 'To see your petition, click the following link:',
    previewButton: 'Preview your Petition'
  },
  petitionFields: {
    city: {
      label: 'Select a city',
      placeholder: 'Enter city or zip code',
      hint: 'The city your change is concerned with.'
    },
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
  supportPetition: {
    newlySupported: {
      modal: {
        title: 'Thank you!',
        intro: 'Now that you\'ve supported this petition, show even more support by sharing the link to anyone you know.'
      }
    },
    alreadySupported: {
      modal: {
        title: 'Got it!',
        intro: 'You\'ve already supported this petition, but go ahead and share the link to anyone you know.'
      }
    }
  },
  petitionResponseStatus: {
    pending: {
      title: 'Pending response from Gemeinde',
      text: 'This petition reached its target goal of %required votes and is awaiting response since **%daysPending** days ago.'
    },
    arrived: {
      title: 'Response from Gemeinde',
      text: 'This petition reached its target goal of %required votes and has already been answered by %name.'
    }
  },
  shareButtons: {
    facebook: {
      label: 'Share on Facebook'
    },
    twitter: {
      label: 'Share on Twitter',
      tweetText: 'This petition needs your support:'
    },
    whatsapp: {
      label: 'Send via Whatsapp'
    },
    email: {
      label: 'Send via Email',
      subject: 'This petition needs your support',
      body: 'Get informed and support the following petition:'
    }
  },
  /**
   * You can configure one environment-specific SSO provider in the ENV variables using
   * SSO_PROVIDER_TEXT and SSO_PROVIDER_URL. Or you can set multiple ssoProviders here:
   */
  // ssoProviders: [
  //   {
  //     text: 'Sign in with MY SSO SERVICE',
  //     url: 'https://MYSSOSERVICE.com/login'
  //   }
  // ],
  ssoProviders: [],
  modalWindow: {
    closeButton: 'Close this dialog window'
  },
  auth: {
    afterLoginPath: '/',
    afterLogoutPath: '/'
  },
  loginPage: {
    title: 'Please log in',
    intro: 'To begin creating your Petition please log in using one of the services below. Afterwards, you won\'t be required to enter any contact information.'
  },
  flashMessages: {
    genericError: 'Sadly something failed, please try again!',
    petitionCreated: 'Great, your petition was created!',
    petitionPublished: 'Great, your petition was published!',
    petitionUpdated: 'Your petition was updated',
    petitionSupported: 'Thank you for signing this petition!'
  },
  logo: 'IRIS',
  navigationLinks: [
    {
      label: 'Browse petitions',
      path: '/petitions'
    },
    {
      label: 'Create petition',
      path: '/petitions/new'
    }
  ],
  footer: {
    copyright: 'Copyright \u00A9 2016 Iris'
  }
};
