const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

// get routes
router.get('/', mainController.getMain);
router.get('/create', mainController.getCreate);
router.get('/tournaments', mainController.getTournaments);

router.post('/create', mainController.postCreate);

module.exports = router;
