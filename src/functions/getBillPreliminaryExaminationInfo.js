const shared = require('../shared');

/**
 * @typedef GetBillPreLiminaryExaminationInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 의안상세정보 중에서 상임위원회 예비심사 정보를 조회하는 기능 제공(예•결산에만 해당)
 * @param {GetBillPreLiminaryExaminationInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
