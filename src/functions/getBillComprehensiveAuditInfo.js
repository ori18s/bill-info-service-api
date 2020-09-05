const shared = require('../shared');

/**
 * @typedef GetBillComprehensiveAuditInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 의안상세정보 중에서 예산결산특별위원회 종합심사 정보를 조회하는 기능 제공(예•결산에만 해당)
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetBillComprehensiveAuditInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
};
