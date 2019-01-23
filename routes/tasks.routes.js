const
  express = require('express'),
  router = express.Router(),
  controller = require('../controllers/tasks.controller');

router.post('', controller.create);

router.get('', controller.getAll);

router.get('/:taskId', controller.findById);

router.put('/:taskId', controller.update);

router.delete('/:taskId', controller.delete);

module.exports = router;