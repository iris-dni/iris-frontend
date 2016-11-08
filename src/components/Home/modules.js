import settings from 'settings';
import Hero from 'components/Hero';
// import AdSlot from 'containers/AdSlot';
import PetitionGroup from 'containers/PetitionGroup';

export default [
  {
    component: Hero,
    props: settings.homePage.hero
  },
  // {
  //   component: AdSlot,
  //   props: {
  //     context: 'home',
  //     type: 'wideboard'
  //   }
  // },
  {
    component: PetitionGroup,
    props: {
      group: 'trending'
    }
  },
  {
    component: PetitionGroup,
    props: {
      group: 'latest'
    }
  }
];
