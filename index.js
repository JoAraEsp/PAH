const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./infrastructure/routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use(taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    const baseURL = `http://localhost:${PORT}`;
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    console.log(`Para ver las tareas, visita: ${baseURL}/tasks`);
});
