const express = require('express');
const router = express.Router();
const viewsController = require('../Controllers/viewsController');
const smsController = require('./../Controllers/smsController');

router.get('/', viewsController.getHome);
router.get('/index', viewsController.getIndex);
router.get('/records', viewsController.getRecords);
router.get('/contacts', viewsController.getContact);
router.get('/template', viewsController.getTemplate);
router.get('/edit/:id', smsController.viewMessage);






module.exports = router;