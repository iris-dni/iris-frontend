export default {
  locale: 'en-US',
  charset: 'utf-8',
  title: 'iris-frontend',
  twitterAccount: 'azmedien',
  googleAnalytics: {
    APIKey: '',
    initOptions: {}
  },
  daysToVote: 30,
  emailRegex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  telephoneRegex: /^(\+43|0043|\+49|0049|\+41|0041)[ 0-9]{4,}$/i,
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
  createCTA: {
    background: '/dist/assets/images/cta-bg.jpg'
  },
  homePage: {
    hero: {
      background: '/dist/assets/images/hero-bg.jpg'
    }
  },
  petitionGroups: {
    trending: {
      linkHref: '/petitions?sort=trending'
    },
    latest: {
      linkHref: '/petitions?sort=date'
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
  auth: {
    afterLoginPath: '/',
    afterLogoutPath: '/'
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
  navigationLinks: [
    {
      label: 'Browse petitions',
      path: '/petitions'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Create petition',
      path: '/petitions/new'
    }
  ]
};
