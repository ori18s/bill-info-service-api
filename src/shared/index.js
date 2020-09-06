const axios = require('axios');
const path = require('path');

/**
 * @description shared function for openapi http request
 * @param {String} url - openapi url with resource
 * @param {String} serviceKey - open api service key
 * @param {Object} params - querystring openapi supports
 */
exports.get = async (url, serviceKey, params) => {
  if (!serviceKey) {
    throw new Error('Service key required. Set as an environment variable.');
  }
  axios.defaults.adapter = require('axios/lib/adapters/http');
  return axios.get(`${url}?ServiceKey=${serviceKey}`, params)
      .then(res => res.data.response.body.items.item)
      .catch(err => err);
};

exports.getBasePathFromFilename = (currentPath = __filename, ext = '.js') => {
  return path.basename(currentPath, ext);
}