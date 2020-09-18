const shared = require('../shared');

/**
 * @typedef GetBillPetitionMemberListParam
 * @property {String} pageNo: '1'
 * @property {String} numOfRows: '10'
 */

/**
 * 의안/청원 접수 정보중에서 국회의원 목록을 조회하는 기능
 * @param {GetBillPetitionMemberListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
