var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var models = require('../models');
var user = models.users;
var helpers = require('../helpers/user');

router.route('/').get(helpers.getUsers).post(helpers.registerUser);

module.exports = router;