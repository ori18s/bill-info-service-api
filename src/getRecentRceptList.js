const shared = require('./shared');

/**
 * @typedef GetRecentRceptListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} bill_name: '국회법'
 */

/**
 * 최근 접수의안 목록 정보조회
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetRecentRceptListParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
}
