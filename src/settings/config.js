export default {
  locale: 'en-US',
  charset: 'utf-8',
  title: 'iris-frontend',
  logoPath: '',
  twitterAccount: 'azmedien',
  googleAnalyticsID: 'UA-XXXXX-Y',
  daysToVote: 30,
  daysForResponse: 40,
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
  aboutPage: {
    hero: {
      background: '/dist/assets/images/hero-bg.jpg'
    }
  },
  petitionGroups: {
    trending: {
      linkHref: '/petitions'
    },
    latest: {
      linkHref: '/petitions?sort=date'
    },
    answered: {
      linkHref: '/petitions?state=answered'
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
      link: 'https://www.digitalnewsinitiative.com/',
      image: '/dist/assets/images/supporters/dni.png'
    },
    {
      name: 'AZ Medien',
      link: 'http://www.azmedien.ch/',
      image: '/dist/assets/images/supporters/az-medien.png'
    },
    {
      name: 'Edenspiekermann',
      link: 'https://www.edenspiekermann.com/',
      image: '/dist/assets/images/supporters/edenspiekermann.png'
    },
    {
      name: 'Lovely Systems',
      link: 'http://www.lovelysystems.com/',
      image: '/dist/assets/images/supporters/lovely-systems.png'
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
