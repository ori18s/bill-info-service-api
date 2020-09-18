const shared = require('../shared');

/**
 * @typedef GetPeriodListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대별 회기정보(회기, 회기시작일, 회기종료일)를 조회하는 기능 제공
 * @param {GetPeriodListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
