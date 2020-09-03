const shared = require('../shared');

/**
 * @typedef GetSessionRequestListParam
 * @property {String} pageNo: '1'
 * @property {String} numOfRows: '10'
 * @property {String} start_age_cd: '20'
 * @property {String} bill_kind_cd: 'B04'
 * @property {String} curr_committee: '9700300'
 * @property {String} bill_name: '법률안'
 */

/**
 * 의안종류, 소관위원회별 본회의부의요청안건 목록을 조회하는 기능 제공
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetSessionRequestListParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
};
