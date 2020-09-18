const shared = require('../shared');

/**
 * @typedef GetCommitPetitionMooringInfoListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대수, 소관위원회별 청원 계류 목록을 조회하는 기능 제공
 * @param {GetCommitPetitionMooringInfoListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
