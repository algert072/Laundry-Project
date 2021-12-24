const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const preferenceController = require('../controller/preference');

router.get('/', auth, preferenceController.getPreference);

router.put('/', auth, preferenceController.updatePreference);

module.exports = router;