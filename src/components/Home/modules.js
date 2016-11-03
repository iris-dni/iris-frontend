import settings from 'settings';
import Hero from 'components/Hero';
import AdSlot from 'containers/AdSlot';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: settings.homePage.hero
  },
  {
    component: AdSlot,
    props: {
      context: 'home',
      type: 'wideboard'
    }
  },
  {
    component: HomepagePetitions,
    props: {}
  }
];
