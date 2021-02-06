var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var models = require('../models');
var reporter = models.reporter;
var helpers = require('../helpers/reporter');

router.route('/').get(helpers.getReporters).post(helpers.createReporter);
router.route('/:reporterId').get(helpers.readReporter).put(helpers.updateReporter).delete(helpers.deleteUser)

module.exports = router;