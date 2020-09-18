const shared = require('../shared');

/**
 * @typedef GetCommitPetitionListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대별 위원회 정보를 조회하는 기능 제공
 * @param {GetCommitPetitionListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
