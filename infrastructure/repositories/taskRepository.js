const mysql = require('mysql2/promise');

class TaskRepository {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'tasks_db'
        });
    }

    async create({ title, completed = false }) {
        const [results, fields] = await this.connection.execute('INSERT INTO tasks (title, completed) VALUES (?, ?)', [title, completed]);
        const id = results.insertId;
        return { id, title, completed };
    }

    async findAll() {
        const [results, fields] = await this.connection.execute('SELECT * FROM tasks');
        return results;
    }

    async findById(id) {
        const [results, fields] = await this.connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
        return results[0];
    }

    async update(id, { title, completed }) {
        const [results, fields] = await this.connection.execute('UPDATE tasks SET title = ?, completed = ? WHERE id = ?', [title, completed, id]);
        if (results.affectedRows > 0) {
            return { id, title, completed };
        }
        return null;
    }

    async delete(id) {
        const task = await this.findById(id);
        if (task) {
            await this.connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
            return task;
        }
        return null;
    }
}

module.exports = TaskRepository;