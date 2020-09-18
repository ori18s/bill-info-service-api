const shared = require('../shared');

/**
 * @typedef GetJsictionComiteProcessListParam
 * @property {String} pageNo: '1'
 * @property {String} numOfRows: '10'
 * @property {String} start_age_cd: '19'
 * @property {String} bill_kind_cd: 'B04'
 * @property {String} curr_committee: '9700005'
 * @property {String} bill_name: '국회법'
 */

/**
 * 의안종류, 소관위원회별 처리의안 목록을 조회하는 기능
 * @param {GetJsictionComiteProcessListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
