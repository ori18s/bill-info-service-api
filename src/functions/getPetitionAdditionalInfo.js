const shared = require('../shared');

/**
 * @typedef GetPetitionAdditionalInfoParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 */

/**
 * 청원상세정보 중에서 부가정보를 조회하는 기능 제공
 * @param {String} baseUrl - openapi base url
 * @param {String} serviceKey - openapi serviceKey
 * @param {GetPetitionAdditionalInfoParam} params - openapi params: query string supported from open api
 */
module.exports = (baseUrl, serviceKey, params) => {
    const resource = shared.getBasePathFromFilename(__filename);
    const url = baseUrl + resource;
    return shared.get(url, serviceKey, params)
};
