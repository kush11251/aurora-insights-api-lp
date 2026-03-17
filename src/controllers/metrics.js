const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/', async (req, res) => {
    const metrics = await metricsService.getMetrics();
    res.json(metrics);
});
module.exports = router