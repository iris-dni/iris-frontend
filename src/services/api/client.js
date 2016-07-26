// import axios from 'axios';

// const env = process.env;
// const host = env.API_HOST;
// const token = env.API_TOKEN;
// const baseUri = `${host}/api/v1/`;

const request = (path) => {
  // do the actuall api request to the given path here...
  // return some petition mock data for now:
  return {
    'petition': {
      'id': 1,
      'state': ['signable', 'active'],
      'tags': ['big'],
      'title': 'Petition title',
      'city': 1,
      'type': '',
      'description': 'Petition description',
      'suggested_solution': 'Solve it!'
    }
  };
};

export default {
  request: request
};
