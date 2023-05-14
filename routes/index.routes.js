const Todo = require('./todo.routes');
const express = require('express');
const app = express();

app.use(Todo);
app.use((req,res) => {
    res.json({
        success: false,
        error: {
            messege: `Invalid request`,
            code: 404,
            errors: []
        }
    });
});

module.exports = app;