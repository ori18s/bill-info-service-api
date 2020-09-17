const shared = require('../shared');

/**
 * @typedef GetBillReceiptInfoParam
 * @property {String} ServiceKey: '-'
 * @property {String} pageNo: '1'
 * @property {String} numOfRows: '10'
 * @property {String} bill_id: 'PRC_V1D5J0T4C1Y3A1Q7Q3L8U4J0S5L1M6'
 */

/**
 * 의안상세정보 중에서 접수 정보를 조회하는 기능 제공
 * @param {GetBillReceiptInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
