const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill');

/**
 * GET /bill/bill_infos
 *
 * @swagger
 * /bill/bill_infos:
 *   get:
 *     summary: get bill_infos
 *     tags:
 *       - Bill
 *     description:
 *       querystring <br>
 *       * tag { 'register_required' | 'privacy_required' | 'marketing_optional' } <br>
 *       * display { 'Y' | 'N' }
 *     parameters:
 *       - in: query
 *         name: tag
 *         required: false
 *         type: string
 *       - in: query
 *         name: display
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json
 */
router.get('/bill_infos', billController.getBillInfoList);

module.exports = router;
