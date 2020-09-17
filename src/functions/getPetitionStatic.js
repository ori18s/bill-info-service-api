const shared = require('../shared');

/**
 * @typedef GetPetitionStaticParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} start_age: '20',
 */

/**
 * 대수를 조건으로 청원 통계 정보를 조회하는 기능 제공
 * @param {GetPetitionStaticParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
