const shared = require('../shared');

/**
 * @typedef GetPetitionReceiptInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 청원상세정보 중에서 접수 정보를 조회하는 기능 제공
 * @param {GetPetitionReceiptInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
