const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill');

/**
 * GET /bill/info
 *
 * @swagger
 * /bill/info:
 *   get:
 *     summary: get bill info
 *     tags:
 *       - Bill
 *     description:
 *     parameters:
 *       - in: query
 *         required: false
 *         type: string
 *         description: '페이지번호'
 *         name: pageNo
 *       - in: query
 *         required: false
 *         type: string
 *         description: '한 페이지 결과 수'
 *         name: numOfRows
 *       - in: query
 *         required: false
 *         type: string
 *         description: '발의자 검색구분'
 *         name: mem_name_check
 *       - in: query
 *         required: false
 *         type: string
 *         description: '국회의원 성명'
 *         name: mem_name
 *       - in: query
 *         required: false
 *         type: string
 *         description: '한자성명'
 *         name: hj_nm
 *       - in: query
 *         required: false
 *         type: string
 *         description: '제안대수로 검색'
 *         name: ord
 *       - in: query
 *         required: false
 *         type: string
 *         description: '시작 대수'
 *         name: start_ord
 *       - in: query
 *         required: false
 *         type: string
 *         description: '마지막 대수'
 *         name: end_ord
 *       - in: query
 *         required: false
 *         type: string
 *         description: '본회의 처리 회기 검색'
 *         name: process_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '시작 본회의 처리회기'
 *         name: start_process_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '마지막본회의처리회기'
 *         name: end_process_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '제안회기구분'
 *         name: propose_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '시작제안회기'
 *         name: start_propose_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '마지막제안회기'
 *         name: end_propose_num
 *       - in: query
 *         required: false
 *         type: string
 *         description: '시작제안일자'
 *         name: start_propose_date
 *       - in: query
 *         required: false
 *         type: string
 *         description: '마지막제안일자'
 *         name: end_propose_date
 *       - in: query
 *         required: false
 *         type: string
 *         description: '시작회부일자'
 *         name: start_committee_dt
 *       - in: query
 *         required: false
 *         type: string
 *         description: '마지막회부일자'
 *         name: end_committee_dt
 *       - in: query
 *         required: false
 *         type: string
 *         description: '의안종류'
 *         name: bill_kind_cd
 *       - in: query
 *         required: false
 *         type: string
 *         description: '소관위원회'
 *         name: curr_committee
 *       - in: query
 *         required: false
 *         type: string
 *         description: '제안종류'
 *         name: proposer_kind_cd
 *       - in: query
 *         required: false
 *         type: string
 *         description: '소관위처리결과'
 *         name: p_proc_result_cd
 *       - in: query
 *         required: false
 *         type: string
 *         description: '본회의처리결과'
 *         name: b_proc_result_cd
 *       - in: query
 *         required: false
 *         type: string
 *         description: '의안명'
 *         name: bill_name
 *       - in: query
 *         required: false
 *         type: string
 *         description: '구분'
 *         name: gbn
 *       - in: query
 *         required: false
 *         type: string
 *         description: '본회의수정안'
 *         name: amendmentyn
 *       - in: query
 *         required: false
 *         type: string
 *         description: '비용추계서유무'
 *         name: budget
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json
 */
router.get('/info', billController.getBillInfoList);

/**
 * GET /bill/petition_member
 *
 * @swagger
 * /bill/petition_member:
 *   get:
 *     summary: get bill petition member
 *     tags:
 *       - Bill
 *     description:
 *     parameters:
 *       - in: query
 *         required: true
 *         type: string
 *         description: '의안ID'
 *         name: bill_id
 *       - in: query
 *         required: false
 *         type: string
 *         description: '구분1'
 *         name: gbn1
 *       - in: query
 *         required: false
 *         type: string
 *         description: '구분2'
 *         name: gbn2
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json
 */
router.get('/petition_member', billController.getBillPetitionMemberList);

module.exports = router;
