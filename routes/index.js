const express = require('express');
const router = express.Router();
const {getHealthCheck} = require('../controllers/index');

/**
 * NOT listed in the api spec document
 * GET /
 *
 * /:
 *   get:
 *     description: health check
 *     responses:
 *       200:
 *         description: health check
 */
router.get('/', getHealthCheck);

module.exports = router;
