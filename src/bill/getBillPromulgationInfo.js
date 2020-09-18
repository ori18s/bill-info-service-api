const shared = require('../shared');

/**
 * @typedef GetBillPromulgationInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 의안상세정보 중에서 공포 정보를 조회하는 기능 제공
 * @param {GetBillPromulgationInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
