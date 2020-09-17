const shared = require('../shared');

/**
 * @typedef GetPetitionListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 국회 대수, 접수일, 소개의원, 청원인, 청원명, 소관위원회를 조건으로 청원 목록을 조회하는 기능 제공
 * @param {GetPetitionListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
