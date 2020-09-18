const shared = require('../shared');

/**
 * @typedef GetMooringBillStaticListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 의안종류별, 위원회별 계류의안 통계 정보를 조회하는 기능 제공(현재 대수)
 * @param {GetMooringBillStaticListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
