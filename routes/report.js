var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var models = require('../models');
var report = models.report;
var helpers = require('../helpers/report');

router.route('/').get(helpers.getReport).post(helpers.createReport);
router.route('/:reportId').get(helpers.readReport).put(helpers.updateReport).delete(helpers.deleteReport);

module.exports = router;