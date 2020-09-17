const shared = require('../shared');

/**
 * @typedef GetBillAdditionalInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 의안상세정보 중에서 부가정보를 조회하는 기능
 * @param {GetBillAdditionalInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
