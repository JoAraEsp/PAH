const mysql = require('mysql2/promise');
const TaskRepository = require('../repositories/taskRepository');
const TaskService = require('../../application/services/uses-cases/taskService');
const TaskController = require('../controllers/taskController');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tasks_db'
    });

    const taskRepository = new TaskRepository(connection);
    const taskService = new TaskService(taskRepository);
    const taskController = new TaskController(taskService);

    return { taskController };
}

module.exports = {
    initializeDatabase,
};