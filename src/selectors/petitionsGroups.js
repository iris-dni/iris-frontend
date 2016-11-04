// import { get } from 'lodash/object';
import getPetitions from 'selectors/petitions';

export default (petitions, groups) => {
  const x = (groups || []).map((group) => {
    const groupData = petitions[group] || {};
    return {
      petitions: getPetitions(groupData.data || []),
      isLoading: groupData.isLoading
    };
  });
  return x;
};
  //   console.log(block.group);
  //   // const blockPetitions = get(petitions[block.group], 'data', []);
  //   // console.log('petitions', blockPetitions);
  //   return {};
  //   // };
  // });

  // const petitionGroups = {};

  // groups.forEach((group) => {
  //   const data = { data: getPetitions(petitions[group.group] && petitions[group.group].data || []) };
  //   const isLoading = { isLoading: petitions[group.group] && petitions[group.group].isLoading || false };

  //   set(
  //     petitionGroups,
  //     group.group,
  //     Object.assign({}, data, isLoading)
  //   );
  // });

  // return petitionGroups;
// };
