const getBillInfoList = require('../src/functions/getBillInfoList');
const {basePath, serviceKey} = require('../config');
const params = {
  pageNo: '1',
  numOfRows: '10',
  mem_name_check: 'G01',
  mem_name: '김영주',
  hj_nm: '金榮珠',
  ord: 'A01',
  start_ord: '19',
  end_ord: '19',
  process_num: '-',
  start_process_num: '-',
  end_process_num: '-',
  propose_num: '-',
  start_propose_num: '-',
  end_propose_num: '-',
  start_propose_date: '2013-01-01',
  end_propose_date: '2015-01-01',
  start_committee_dt: '2014-01-01',
  end_committee_dt: '2015-01-01',
  bill_kind_cd: 'B04',
  curr_committee: '9700008',
  proposer_kind_cd: 'F01',
  p_proc_result_cd: 'D01',
  b_proc_result_cd: 'E01',
  bill_name: '기',
  gbn: 'dae_num_name',
  amendmentyn: 'false',
  budget: 'false'
};

beforeAll(() => {
  require('dotenv').config();
});

it('getBillInfoList', async () => {
  const res = await getBillInfoList(basePath, serviceKey, params);
  expect(res[0].billId.split('_')[0]).toBe('PRC');
});