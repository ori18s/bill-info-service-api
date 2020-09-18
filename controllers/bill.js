const fn = require('../src/bill');

exports.getBillInfoList = async (req, res, next) => {
  console.log(req.query);
  try {
    const result = await fn.getBillInfoList(req.query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getRecentRceptList = async (req, res, next) => {
  try {
    const result = await fn.getRecentRceptList(req.query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getRecentPasageList = async (req, res, next) => {
  try {
    const result = await fn.getRecentPasageList(req.query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
