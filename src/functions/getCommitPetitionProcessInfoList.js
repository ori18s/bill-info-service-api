const shared = require('../shared');

/**
 * @typedef GetCommitPetitionProcessInfoListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대수, 소관위원회별 청원 처리 목록을 조회하는 기능
 * @param {GetCommitPetitionProcessInfoListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
