const shared = require('../shared');

/**
 * @typedef GetMotionLawListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} mem_name: '황주홍',
 * @property {String} bill_name: '국회법',
 */

/**
 * 법률안 발의자를 조건으로 의안 목록을 조회하는 기능 제공
 * @param {GetMotionLawListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
