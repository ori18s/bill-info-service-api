const shared = require('../shared');

/**
 * @typedef GetAnnualReportListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 연차보고서 목록을 조회하는 기능
 * @param {GetAnnualReportListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
