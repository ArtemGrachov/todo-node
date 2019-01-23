const
  express = require('express'),
  router = express.Router(),
  controller = require('../controllers/user.controller');

router.post('/registration', controller.registration);

module.exports = router;