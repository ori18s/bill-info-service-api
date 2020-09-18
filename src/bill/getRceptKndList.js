const shared = require('../shared');

/**
 * @typedef GetRceptKndListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대수, 본회의 처리회기, 제안회기, 제안기간을 조건으로 처리의안 통계(위원회별) 정보를 조회하는 기능 제공
 * @param {GetRceptKndListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
