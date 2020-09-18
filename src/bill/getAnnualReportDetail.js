const shared = require('../shared');

/**
 * @typedef GetAnnualReportDetailParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 연차보고서 세부 정보를 조회하는 기능
 * @param {GetAnnualReportDetailParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
