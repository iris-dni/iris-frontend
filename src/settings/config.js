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
  supportersText: 'Supporters',
  milestoneText: 'Target',
  daysRemaining: 'Days left',
  teaserSupportersText: 'Supporters',
  tesaserMilestoneText: 'Target',
  teaserDaysRemaining: 'days left',
  daysToVote: 30,
  optionalLabel: '(optional)',
  requiredText: 'You must complete this field',
  minLengthText: 'Must be %x characters or more',
  maxLengthText: 'Cannot be more than %x characters',
  petitionsPerPage: 12,
  /* FIXME: find better way to import colors
     without duplicating them
     Try regex with https://github.com/webpack/raw-loader
     to import vars from stylesheet. */
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
    attachedLinks: 'Links attached to this petition:',
    supportButton: {
      text: 'Support Petition',
      supportedText: 'Supported',
      unsupportableText: 'Petition Ended',
      modal: {
        title: 'Please log in',
        intro: 'In order to sign the Petition, we need you to log in using one of the services below..'
      }
    },
    cityResponse: 'Official response:',
    tags: {
      winner: 'Winner',
      response: 'Response'
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
  respondToPetitionPage: {
    title: 'Response Form',
    pageTitle: 'Your reply',
    intro: 'This is the form where you submit your official response to a petition. This response will be displayed on the original petition, so this is your opportunity to communicate with everyone who supported the initiative. Make sure your response is a good one.',
    hints: {
      title: 'A few pointers on what makes a good response:',
      first: 'Make sure to answer to the original complaint/idea.',
      second: 'Outline what the next steps are.',
      third: 'Remember to sign with your name and department.',
      fourth: 'The citizens in your city cared enough to write and/or support a cause, be respectful of their opinions.'
    },
    details: {
      for: 'For',
      by: 'By',
      in: 'In',
      collected: 'Collected',
      votes: 'votes'
    }
  },
  respondedToPetitionPage: {
    title: 'Congratulations, your response has been succesfully published.',
    link: 'View your response'
  },
  petitionNotFoundByResponseTokenPage: {
    title: 'Sorry but looks like a wrong link, or it’s no longer working.',
    hint: 'Please re-enter the link or contact our admins if you believe there is a mistake and you are unsure of how to proceed.',
    homeButton: {
      text: 'Okay, take me home'
    }
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
  respondToPetitionForm: {
    publishButton: {
      text: 'Submit response',
      modal: {
        intro: 'To publish a Petition please sign in using one of the services below. Afterwards, you woni\'t be required to enter any contact information.'
      }
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
    },
    links: {
      label: 'Related links',
      removeLinkLabel: 'Remove link',
      placeholder: 'http://',
      hint: 'Include up to 3 links that support your petition.',
      maxLinks: 3,
      invalidLinkFormat: 'This is not a valid link',
      invalidLinkCount: 'You can’t add more than %x links',
      invalidSimilarLink: 'You can only add unique links'
    }
  },
  respondToPetitionFields: {
    response: {
      label: 'Write your response',
      placeholder: 'Tell the petitioner and supporters what you plan to do…',
      hint: 'To write a good response, you should clearly communicate why you care about this cause, how it impacts the local community and what steps you plan to take.'
    },
    name: {
      label: 'Include your name and department',
      hint: 'This appears below your response',
      placeholder: 'Max Mustermann, Mayor'
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
      title: 'Pending official response',
      text: 'This petition reached its target goal of %required votes and is awaiting response since **%daysPending** days ago.'
    },
    arrived: {
      title: 'Official response',
      text: 'This petition reached its target goal of %required votes and has already been answered by %name.'
    },
    link: 'View official reply'
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
