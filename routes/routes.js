const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

// get routes
router.get('/', mainController.getMain);

router.post('/create', mainController.postCreate);

module.exports = router;
