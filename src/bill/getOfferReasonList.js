const shared = require('../shared');

/**
 * @typedef GetOfferReasonListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 제안이유/주요내용을 조건으로 의안 목록을 조회하는 기능
 * @param {GetOfferReasonListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
