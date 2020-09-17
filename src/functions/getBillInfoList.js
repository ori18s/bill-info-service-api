const shared = require('../shared');

/**
 * @typedef GetBillingInfoListParam
 * @property {String} pageNo: '1',
 * @property {String} numOfRows: '10',
 * @property {String} mem_name_check: 'G01',
 * @property {String} mem_name: '김영주',
 * @property {String} hj_nm: '金榮珠',
 * @property {String} ord: 'A01',
 * @property {String} start_ord: '19',
 * @property {String} end_ord: '19',
 * @property {String} process_num: '-',
 * @property {String} start_process_num: '-',
 * @property {String} end_process_num: '-',
 * @property {String} propose_num: '-',
 * @property {String} start_propose_num: '-',
 * @property {String} end_propose_num: '-',
 * @property {String} start_propose_date: '2013-01-01',
 * @property {String} end_propose_date: '2015-01-01',
 * @property {String} start_committee_dt: '2014-01-01',
 * @property {String} end_committee_dt: '2015-01-01',
 * @property {String} bill_kind_cd: 'B04',
 * @property {String} curr_committee: '9700008',
 * @property {String} proposer_kind_cd: 'F01',
 * @property {String} p_proc_result_cd: 'D01',
 * @property {String} b_proc_result_cd: 'E01',
 * @property {String} bill_name: '기',
 * @property {String} gbn: 'dae_num_name',
 * @property {String} amendmentyn: 'false',
 * @property {String} budget: 'false'
 */

/**
 * 의안 목록 검색
 * @param {GetBillingInfoListParam} params - openapi params: query string supported from open api
 */
module.exports = (params) => {
  const resource = shared.getBasePathFromFilename(__filename);
  return shared.get(resource, params);
};
