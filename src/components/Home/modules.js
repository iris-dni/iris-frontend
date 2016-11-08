import settings from 'settings';
import Hero from 'components/Hero';
import PetitionGroup from 'containers/PetitionGroup';

export default [
  {
    component: Hero,
    props: settings.homePage.hero
  },
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
