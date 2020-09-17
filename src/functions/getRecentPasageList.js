const shared = require('../shared');


/**
 * @typedef GetRecentPasageListParam
 * @property {String} pageNo: pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} bill_name: '결의안',
 */

/**
 * 최근 통과의안 목록을 조회
 * @param {GetRecentPasageListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
