const Task = require('../models/task.model');

const internalError = (res, err) => res.status(500).send({
  message: err.message || 'Internal server error'
}),
  notFound = (req, res) => res.status(404).send({
    message: `Task with id ${req.params.taskId} not found`
  }),
  empty = (res) => res.status(400).send({
    message: 'Task content cannot be empty'
  }),
  fieldsToSelect = 'id title description';

exports.create = (req, res) => {
  if (!req.body.description) {
    return empty(res);
  }

  const task = new Task({
    title: req.body.title,
    description: req.body.description
  })

  task.save()
    .then(data => res.send(data))
    .catch(err => errorHandler(req, err))
}

exports.getAll = (req, res) => {
  Task
    .find()
    .select(fieldsToSelect)
    .then(tasks => res.send(tasks))
    .catch(err => errorHandler(req, err));
}

exports.findById = (req, res) => {
  Task.findById(req.params.taskId)
    .select(fieldsToSelect)
    .then(task => task ? res.send(task) : notFound(req, res))
    .catch(err => internalError(res, err));
}

exports.update = (req, res) => {
  if (!req.body) {
    return empty(res);
  }

  Task.findByIdAndUpdate(
    req.params.taskId,
    req.body,
    { new: true }
  )
    .select(fieldsToSelect)
    .then(task => {
      if (!task) {
        return notFound(req, res);
      }
      res.send(task);
    })
    .catch(err => internalError(res, err));
}

exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.taskId)
    .select(fieldsToSelect)
    .then(task => {
      if (!task) return notFound(req, res);
      res.send(task);
    })
    .catch(err => internalError(res, err));
}