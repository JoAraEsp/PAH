const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const taskService = require('../../application/services/uses-cases/taskService');

const taskController = new TaskController(taskService);

router.post('/tasks', taskController.createTask.bind(taskController));
router.get('/tasks', taskController.getTasks.bind(taskController));
router.get('/tasks/:id', taskController.getTaskById.bind(taskController));
router.put('/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/tasks/:id', taskController.deleteTask.bind(taskController));

module.exports = router;