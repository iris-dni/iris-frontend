import settings from 'settings';
import Hero from 'components/Hero';
import CreateCTA from 'components/CreateCTA';
import AdSlot from 'components/AdSlot';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: {...settings.homePage.hero}
  },
  {
    component: AdSlot,
    props: {
      type: 'wideboard',
      currentCity: {}
    }

  },
  {
    component: HomepagePetitions,
    props: {...settings.trendingPetitions}
  },
  {
    component: CreateCTA,
    props: {...settings.createCTA}
  }
];
