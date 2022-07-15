const express = require('express');
const router = express.Router();
const smsController = require('./../Controllers/smsController');


router
.route('/')
// .get(messageController.getAllMessage)
.post(smsController.SendText);

router
.route('/:id')
.post(smsController.ResendMessage);
// .delete(messageController.deleteMessage)


module.exports = router;