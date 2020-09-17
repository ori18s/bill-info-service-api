const c = require('ansi-colors');

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  console.log('NODE_ENV:', NODE_ENV);

  if (NODE_ENV !== 'production') {
    console.log(c.yellow('* dotenv activated @config'));
    require('dotenv').config();
  }

  return {
    nodeEnv: NODE_ENV,
    basePath: 'http://apis.data.go.kr/9710000/BillInfoService2/',
    serviceKey: process.env.SERVICE_KEY
  }
};