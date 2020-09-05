const shared = require('../shared');

/**
 * @typedef GetProcessBillStaticInfoListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 대수, 본회의 처리회기, 제안회기, 제안기간을 조건으로 처리의안 통계(법률안) 정보조회
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetProcessBillStaticInfoListParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
};
