const shared = require('../shared');


/**
 * @typedef GetRecentPasageList
 * @property {String} pageNo: pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} bill_name: '결의안',
 */

/**
 * 최근 통과의안 목록을 조회
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetRecentPasageList} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  const url = baseUrl + resource;
  return shared.get(url, serviceKey, params)
};
