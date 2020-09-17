const shared = require('../shared');

/**
 * @typedef GetJudgeReportBodyListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 심사보고서 내용을 조건으로 의안 목록을 조회하는 기능 제공
 * @param {GetJudgeReportBodyListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
