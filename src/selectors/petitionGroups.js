import getPetitionGroup from 'selectors/petitionGroup';

export default (petitions, groups = []) => groups.map(group => getPetitionGroup(petitions, group));
