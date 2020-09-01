const getRecentRceptList = require('../src/functions/getRecentRceptList');
const params = {
    pageNo: '1',
    numOfRows: '10',
    bill_name: '국회법'
};

beforeAll(() => {
    require('dotenv').config();
});

it('getRecentRceptList', async () => {
    const res = await getRecentRceptList(process.env.OPEN_API_BASE_ENDPOINT, process.env.SERVICE_KEY, params);
    expect(res[0].billId.split('_')[0]).toBe('PRC');
});