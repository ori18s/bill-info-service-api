const shared = require('../shared');

/**
 * @typedef GetBillDeliverateInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} bill_id: 'ARC_P1E4G0O9V2O2R1M9Z3T5Q1T2P0W3P4'
 */

/**
 * 의안상세정보 중에서 본회의심의 정보를 조회하는 기능 제공
 * @param {GetBillDeliverateInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
