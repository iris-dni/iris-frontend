import getPetitionTeaser from './petitionTeaser';

export default (petitions = []) => {
  if (!petitions || !petitions.length) {
    return [];
  }

  return petitions.map((petition) => getPetitionTeaser(petition));
};
