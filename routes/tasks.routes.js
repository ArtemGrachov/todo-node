module.exports = (app) => {
  const controller = require('../controllers/tasks.controller');

  app.post('/tasks', controller.create);

  app.get('/tasks', controller.getAll);

  app.get('/tasks/:taskId', controller.findById);

  app.put('/tasks/:taskId', controller.update);

  app.delete('/tasks/:taskId', controller.delete);
}