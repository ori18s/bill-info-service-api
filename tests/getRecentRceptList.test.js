const getRecentRceptList = require('../src/functions/getRecentRceptList');
const params = {
  pageNo: '1',
  numOfRows: '10',
  bill_name: '국회법'
};

it('getRecentRceptList', async () => {
  const res = await getRecentRceptList(params);
  console.log(res);
  expect(res[0].billId.split('_')[0]).toBe('PRC');
});