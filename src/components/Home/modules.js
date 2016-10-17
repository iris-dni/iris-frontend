import settings from 'settings';
import Hero from 'components/Hero';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: {...settings.homePage.hero}
  },
  {
    component: HomepagePetitions,
    props: {...settings.trendingPetitions}
  }
];
