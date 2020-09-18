const axios = require('axios');
const path = require('path');
const qs = require('querystring');

/**
 * @description shared function for openapi http request
 * @param {String} resourcePath - resource path without basePath
 * @param {Object} params - querystring openapi suppathports
 */
exports.get = async (resourcePath = '', params) => {
  const {basePath, serviceKey} = require('../../config')();

  if (!serviceKey) {
    throw new Error('Service key required. Set as an environment variable.');
  }
  axios.defaults.adapter = require('axios/lib/adapters/http');

  let queryString = `ServiceKey=${serviceKey}`;

  const queryParam = {
    ...params
  };
  const query = qs.stringify(queryParam);

  if (query) {
    queryString += `&${query}`
  }

  const url = `${basePath}${resourcePath}?${queryString}`;

  return axios.get(url)
      .then(res => res.data.response.body)
      .catch(err => err);
};

exports.getBasePathFromFilename = (currentPath = __filename, ext = '.js') => {
  return path.basename(currentPath, ext);
};