import settings from 'settings';
import Hero from 'components/Hero';
import CreateCTA from 'components/CreateCTA';
import AdContainer from 'components/AdContainer';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: settings.homePage.hero
  },
  {
    component: AdContainer,
    props: {
      type: 'wideboard',
      currentCity: {}
    }

  },
  {
    component: HomepagePetitions,
    props: settings.trendingPetitions
  },
  {
    component: CreateCTA,
    props: settings.createCTA
  }
];
