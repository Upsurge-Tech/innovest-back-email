const express = require('express');
const router = express.Router();
const mailController = require('../controllers/recieve_email')

router.post('/recieveMail', mailController.recieveMail);

module.exports = router;