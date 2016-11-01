export default {
  locale: 'en-US',
  charset: 'utf-8',
  title: 'iris-frontend',
  twitterAccount: 'azmedien',
  googleAnalytics: {
    APIKey: '',
    initOptions: {}
  },
  dateRange: '%s to %e',
  startDate: 'Started on %d',
  endDate: 'Ending on %d',
  runningTime: 'Petitions run for 30 days',
  dateFormat: 'DD-MM-YYYY',
  authorLabel: 'by %a',
  adZoneLabel: 'Sponsored Content',
  supportersText: 'Supporters',
  milestoneText: 'Target',
  daysRemaining: 'Days left',
  teaserSupportersText: 'Supporters',
  tesaserMilestoneText: 'Target',
  teaserDaysRemaining: 'days left',
  daysToVote: 30,
  optionalLabel: '(optional)',
  emailRegex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  telephoneRegex: /^(\+43|0043|\+49|0049|\+41|0041)[ 0-9]{4,}$/i,
  requiredText: 'You must complete this field',
  minLengthText: 'Must be %x characters or more',
  maxLengthText: 'Cannot be more than %x characters',
  emailInvalidText: 'Please enter a valid email address',
  phoneInvalidText: 'Phone number format is invalid',
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
    attachedLinks: 'Further reading about petition:',
    attachedMentions: 'Sites mentioning this petition:',
    supportButton: {
      text: 'Support Petition',
      supportedText: 'Supported',
      unsupportableText: 'Not Supportable',
      endedText: 'Petition Ended',
      closedText: 'Petition Closed'
    },
    cityResponse: 'Official response:',
    tags: {
      winner: 'Winner',
      response: 'Response'
    }
  },
  newPetitionPage: {
    title: 'Create a new petition',
    intro: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.'
  },
  editPetitionPage: {
    title: 'Edit petition',
    intro: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.'
  },
  previewPetitionPage: {
    title: 'Preview petition',
    editButton: 'Edit petition',
    publishButton: 'Publish petition'
  },
  createCTA: {
    title: 'Create a new petition',
    text: 'This is your chance to make a difference. Write about an idea or problem you have in your local area, then publish your petition to gain supporters.',
    buttonText: 'Create Petition',
    background: '/dist/assets/images/cta-bg.jpg'
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
      supporters: 'supporters'
    }
  },
  respondedToPetitionPage: {
    title: 'Congratulations, your response has been succesfully submitted.',
    hint: 'Your response will be reviewed within one working day.',
    link: 'Let’s go explore'
  },
  petitionResponseTokenErrorPage: {
    title: 'Sorry but this link doesn’t exist or is no longer working.',
    hint: 'Please re-enter the link or contact our admins if you believe there is a mistake and you are unsure of how to proceed.',
    homeButton: {
      text: 'Back to the home page'
    }
  },
  homePage: {
    title: 'Welcome to IRIS',
    hero: {
      title: 'Your platform enabling local change',
      missionTitle: 'Our mission',
      missionDescription: 'Empower people to make change in their local communities. We want to give you the chance to be heard, make your cause known, and to gather supporters. We promise to follow up any successful petitions with a letter to your local representative. And, on top of that, your petition might even be selected to be covered by any of our news outlets.',
      background: '/dist/assets/images/hero-bg.jpg'
    }
  },
  trendingPetitions: {
    title: 'Trending petitions',
    text: 'We need your vote!',
    linkText: 'View all trending petitions'
  },
  petitionForm: {
    createButton: 'Create petition',
    saveButton: 'Preview petition'
  },
  trustConfirmationForm: {
    backButton: 'Edit your details',
    saveButton: 'Finish verification'
  },
  trustFlow: {
    step1: {
      support: {
        title: 'Sign in to support',
        text: 'You can either log in with one of the services above, or just fill out your contact details. We won′t display your information online or contact you without your explicit okay.'
      },
      publish: {
        title: 'Sign in to publish',
        text: 'You can either log in with one of the services above, or just fill out your contact details. We won′t display your information online or contact you without your explicit okay.'
      }
    },
    step2: {
      support: {
        title: 'Verify via phone',
        text: 'Once you′ve signed in or entered your contact details, you will recieve a text message verification code to confirm your identity. Enter the code to proceed, and you′re done!'
      },
      publish: {
        title: 'Verify via phone',
        text: 'Once you′ve signed in or entered your contact details, you will recieve a text message verification code to confirm your identity. Enter the code to proceed, and you′re done!'
      }
    }
  },
  respondToPetitionForm: {
    publishButton: 'Submit response'
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
  publishedPetition: {
    modal: {
      title: 'Your petition has been submitted for review',
      intro: 'It can already be supported and will appear online within 48 hours. Until then, why not share it with others to start gaining support?'
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
  petitionResponseStatus: {
    pending: {
      title: 'Pending official response',
      text: 'This petition reached its target of **%required** supporters and has been awaiting an official response for **%daysPending** days.'
    },
    arrived: {
      title: 'Official response',
      text: 'This petition reached its target of **%required** supporters and has been officially answered by %name.'
    },
    link: 'View official response'
  },
  shareButtons: {
    facebook: {
      label: 'Share on Facebook'
    },
    twitter: {
      label: 'Share on Twitter',
      tweetText: 'This petition needs your support:',
      localisedTweetText: 'This petition in %s needs your support:'
    },
    whatsapp: {
      label: 'Send via Whatsapp'
    },
    email: {
      label: 'Send via Email',
      subject: 'This petition needs your support',
      localisedSubject: 'This petition in %s needs your support',
      body: 'Get informed and support the following petition:',
      localisedBody: 'Get informed and support the following petition in %s:'
    },
    link: {
      label: 'Share by URL',
      copiedLabel: 'Link copied'
    },
    embed: {
      label: 'Embed petition',
      modal: {
        type: 'embed',
        title: 'Embed this petition',
        intro: 'To gather support and spread the word, add this petition as widget to your own site',
        button: {
          copyLabel: 'Copy embed code',
          copiedLabel: 'Embed code copied'
        }
      }
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
  trustPage: {
    support: {
      title: 'Support petition',
      intro: 'In order to support this petition, please sign in below',
      trustedIntro: 'Please confirm your details below before continuing',
      formTitle: 'Or, enter your details to proceed without sign in:',
      backButton: 'Back to petition',
      nextButton: 'Send verification',
      trustedNextButtonTrusted: 'Support petition'
    },
    publish: {
      title: 'One last step',
      intro: 'In order to create your petition, please sign in below',
      trustedIntro: 'Please confirm your details below before continuing',
      formTitle: 'Or, enter your details to proceed without sign in:',
      backButton: 'Edit petition',
      nextButton: 'Preview petition'
    }
  },
  trustConfirmationPage: {
    title: 'Enter verification code',
    intro: 'Thanks %u, we sent a verification code to **%n**.',
    resendLink: 'Re-send verification code',
    instructions: 'To complete your phone number verification, please enter the 5-digit activation code.'
  },
  trustFields: {
    firstname: {
      label: 'First name',
      placeholder: 'First name'
    },
    lastname: {
      label: 'Last name',
      placeholder: 'Last name'
    },
    street: {
      label: 'Street address',
      placeholder: 'Street address'
    },
    zip: {
      label: 'Zip code',
      placeholder: 'e.g. 5504'
    },
    town: {
      label: 'Town / city',
      placeholder: 'Town / city'
    },
    email: {
      label: 'Email address',
      placeholder: 'Email address',
      hint: 'Enter your email if you want to receive email notifications about this petition'
    },
    mobile: {
      label: 'Mobile number',
      placeholder: '+41 / +43',
      hint: 'Only country codes **+41** and **+43** are accepted. You must be a Swiss resident to support or publish a petition.'
    }
  },
  trustConfirmationFields: {
    mobile_token: {
      label: 'Verification code',
      placeholder: '-----'
    }
  },
  imprint: {
    supporters: {
      title: 'Platform supporters',
      text: 'These are the companies that supported and participated in the creation of the IRIS platform. All companies are proud to be part of a project for local change.'
    },
    detail: {
      title: 'Platform imprint',
      company: {
        title: 'Company',
        name: 'name',
        address: 'address',
        city: 'zip code and city'
      },
      contact: {
        title: 'Contact',
        name: 'name',
        address: 'address',
        city: 'zip code and city',
        telephone: 'telephone',
        email: 'email'
      }
    }
  },
  platformSupporters: [
    {
      name: 'Google',
      imageUrl: ''
    },
    {
      name: 'Lovely Systems',
      imageUrl: ''
    }
  ],
  flashMessages: {
    genericError: 'Sadly something failed, please try again!',
    petitionCreated: 'Great, your petition was created!',
    petitionPublished: 'Great, your petition was published!',
    petitionUpdated: 'Your petition was updated',
    petitionSupported: 'Thank you for signing this petition!',
    invalidVerificationError: 'Invalid verification code',
    verificationResent: 'Verification code has been re-sent',
    invalidUserDataError: 'Complete your details to support this petition',
    noLongerSupportable: 'This petition is no longer supportable'
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
