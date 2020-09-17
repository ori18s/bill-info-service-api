const fn = require('../src/functions');

exports.getBillInfoList = async (req, res, next) => {
  try {
    const result = await fn.getBillInfoList(req.query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getRecentRceptList = async (req, res, next) => {

};

exports.getRecentPasageList = async (req, res, next) => {

};

exports.getJsictionComiteProcessList = async (req, res, next) => {

};

exports.getRecentMoorList = async (req, res, next) => {

};

exports.getSessionRequestList = async (req, res, next) => {

};

exports.getBillPetitionMemberList = async (req, res, next) => {

};

exports.getPassRceptRecentList = async (req, res, next) => {

};

exports.getRceptKndList = async (req, res, next) => {

};

exports.getRceptMoorList = async (req, res, next) => {

};

exports.getProcessBillStaticInfoList = async (req, res, next) => {

};

exports.getMooringBillStaticList = async (req, res, next) => {

};

exports.getJudgeReportBodyList = async (req, res, next) => {

};

exports.getMotionLawList = async (req, res, next) => {

};

exports.getOfferReasonList = async (req, res, next) => {

};

exports.getPeriodList = async (req, res, next) => {

};

exports.getCommitPetitionList = async (req, res, next) => {

};

exports.getPetitionList = async (req, res, next) => {

};

exports.getCommitPetitionProcessInfoList = async (req, res, next) => {

};

exports.getCommitPetitionMooringInfoList = async (req, res, next) => {

};

exports.getAnnualReportList = async (req, res, next) => {

};

exports.getBillReceiptInfo = async (req, res, next) => {

};

exports.getBillPreliminaryExaminationInfo = async (req, res, next) => {

};

exports.getBillComprehensiveAuditInfo = async (req, res, next) => {

};

exports.getBillCommissionExaminationInfo = async (req, res, next) => {

};

exports.getBillDeliverateInfo = async (req, res, next) => {

};

exports.getBillTransferredInfo = async (req, res, next) => {

};

exports.getBillAdditionalInfo = async (req, res, next) => {

};

exports.getPetitionReceiptInfo = async (req, res, next) => {

};

exports.getPetitionCommissionExaminationInfo = async (req, res, next) => {

};

exports.getPetitionDeliverateInfo = async (req, res, next) => {

};

exports.getPetitionTransferredInfo = async (req, res, next) => {

};

exports.getAchievementInfo = async (req, res, next) => {

};

exports.getPetitionAdditionalInfo = async (req, res, next) => {

};

exports.getPetitionStatic = async (req, res, next) => {

};

exports.getAnnualReportDetail = async (req, res, next) => {

};

exports.getBillPromulgationInfo = async (req, res, next) => {

};
