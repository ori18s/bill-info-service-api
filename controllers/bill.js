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

exports.getBillPetitionMemberList = async (req, res, next) => {
  try {
    const result = await fn.getBillPetitionMemberList(req.query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
