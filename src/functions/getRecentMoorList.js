const shared = require('../shared');

/**
 * @typedef GetRecentMoorListParam
 * @property {String} pageNo: '1'
 * @property {String} numOfRows: '10'
 * @property {String} bill_kind_cd: 'B04'
 * @property {String} curr_committee: '9700005'
 * @property {String} bill_name: '국회법'
 * @property {String} start_age_cd: '20'
 */

/**
 * 의안종류, 소관위원회별 계류의안 목록을 조회하는 기능 제공
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetRecentMoorListParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
};
