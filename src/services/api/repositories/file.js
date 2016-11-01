import ApiClient, { POST } from 'services/api/client';
import FormData from 'form-data';
import path from 'path';

export default {
  find: (id) => {
    const requestPath = path.join('/files', id.toString());
    return ApiClient.request(requestPath);
  },

  create: (file) => {
    const requestPath = '/files';
    const formData = new FormData();
    formData.append('data', file);
    return ApiClient.request(requestPath, formData, POST);
  }
};
