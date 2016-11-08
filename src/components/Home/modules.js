import mergeObjects from 'helpers/mergeObjects';
import { setting } from 'settings';
import { translation } from 'translations';
import Hero from 'components/Hero';
import AdSlot from 'containers/AdSlot';
import PetitionGroup from 'containers/PetitionGroup';

export default [
  {
    component: Hero,
    props: mergeObjects(setting('homePage.hero'), translation('homePage.hero'))
  },
  {
    component: AdSlot,
    props: {
      context: 'home',
      type: 'wideboard'
    }
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
