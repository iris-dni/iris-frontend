import getPetitionPath from 'helpers/getPetitionPath';

export default (petition = {}) => getPetitionPath(petition.id);
