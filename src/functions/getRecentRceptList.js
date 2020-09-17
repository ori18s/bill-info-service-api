const shared = require('../shared');

/**
 * @typedef GetRecentRceptListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} bill_name: '국회법'
 */

/**
 * 최근 접수의안 목록 정보조회
 * @param {GetRecentRceptListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
