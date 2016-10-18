import settings from 'settings';
import Hero from 'components/Hero';
import CreateCTA from 'components/CreateCTA';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: {...settings.homePage.hero}
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
