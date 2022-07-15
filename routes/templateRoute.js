const express = require('express');
const router = express.Router();
const templateController = require('./../Controllers/templateController');

router
.route('/')
.post(templateController.createTemplate);


module.exports = router;