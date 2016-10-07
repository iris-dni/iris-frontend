import Hero from 'components/Hero';
import HomepagePetitions from 'containers/HomepagePetitions';

export default [
  {
    component: Hero,
    props: {
      title: 'Petitio is your platform enabling local change',
      missionTitle: 'Our mission',
      missionDescription: 'Petitio is operated by AZ Medien. Our wish is to empower people to make change in their local communities. We want to give you the chance to be heard, make your cause known, and to gather supporters. We promise to follow up any successful petitions with a letter to your local representative. And, on top of that, your petition might even be selected to be covered by any of our news outlets.',
      background: 'http://placeholdit.imgix.net/~text?txtsize=83&txt=1000%C3%97600&w=1200&h=600'
    }
  },
  {
    component: HomepagePetitions,
    props: {
      title: 'Recent Petitions'
    }
  }
];
