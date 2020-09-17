const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: health check
 *     responses:
 *       200:
 *         description: health check
 */
router.get('/', async (req, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    mem: process.memoryUsage(),
  };
  try {
    res.send(healthcheck);
  } catch (e) {
    healthcheck.message = e;
    res.status(503).send();
  }
});

module.exports = router;
