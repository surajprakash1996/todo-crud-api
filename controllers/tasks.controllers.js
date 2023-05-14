const db = require('../models/index.model');
const { sanitizeInput } = require('../utils/helper');
const ToDoModel = db.Todo;

exports.getAllTasks = async (req, res) => {
    try {
        let data = await ToDoModel.findAll();
        res.status(200).json({
            success: true,
            data: data,
            message: 'fetched.',
            code: 200
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};

exports.getTask = async (req, res) => {
    try {

        let fieldError = [];

        if (!req.query.id) {
            return res.json({
                success: false,
                error: {
                    messege: "Invalid request, ID should not be empty.",
                    code: 204,
                    errors: fieldError
                }
            });
        }

        const data = await ToDoModel.findOne({
            where: {
                id: req.query.id.trim()
            }
        });

        if (data) {
            return res.json({
                success: true,
                data: data,
                message: 'Fetched.',
                code: 200
            });
        }

        res.json({
            success: false,
            error: {
                messege: `Invalid request, Record not matched with ${req.query.id} ID.`,
                code: 404,
                errors: fieldError
            }
        });

    }
    catch (err) {
        res.json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};

exports.createToDo = async (req, res) => {

    try {

        let fieldError = [];

        if (!req.body.todoTitle) {
            fieldError.push({
                field: "todo-title",
                message: "Title should not be empty."
            });

            return res.json({
                success: false,
                error: {
                    messege: "Field error",
                    code: 400,
                    errors: fieldError
                }
            });
        }

        let todo = {
            todoTitle: sanitizeInput(req.body.todoTitle),
            todoDescription: sanitizeInput(req.body.todoDescription),
        };
        const data = await ToDoModel.create(todo);

        res.json({
            success: true,
            data: data,
            message: 'created.',
            code: 201
        });

    }
    catch (err) {
        res.json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};

exports.updateToDo = async (req, res) => {
    try {

        let fieldError = [];

        if (!req.query.id) {

            return res.json({
                success: false,
                error: {
                    messege: "Invalid request, ID should not be empty.",
                    code: 400,
                    errors: fieldError
                }
            });
        }
        else if (!req.body.todoTitle) {

            fieldError.push({
                field: "todoTitle",
                message: "Tilte should not be empty."
            });

            return res.json({
                success: false,
                error: {
                    messege: "Field error",
                    code: 400,
                    errors: fieldError
                }
            });
        }

        let todo = {
            todoTitle: sanitizeInput(req.body.todoTitle),
            todoDescription: sanitizeInput(req.body.todoDescription),
        };
        const data = await ToDoModel.findOne({
            where: {
                id: req.query.id.trim()
            }
        });

        if (data) {
            await data.update(todo);
            return res.json({
                success: true,
                data: data,
                message: 'updated.',
                code: 204
            });
        }


        res.json({
            success: false,
            error: {
                messege: `Invalid request, Record not matched with ${req.query.id} ID.`,
                code: 404,
                errors: fieldError
            }
        });

    }
    catch (err) {
        res.json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};

exports.deleteToDo = async (req, res) => {
    try {

        let fieldError = [];

        if (!req.query.id) {

            return res.json({
                success: false,
                error: {
                    messege: "Invalid request, ID should not be empty.",
                    code: 400,
                    errors: fieldError
                }
            });
        }

        const data = await ToDoModel.destroy({
            where: {
                id: req.query.id.trim()
            }
        });

        if (data === 1) {
            return res.json({
                success: true,
                data: [],
                message: 'Deleted.',
                code: 204
            });
        }

        res.json({
            success: false,
            error: {
                messege: `Invalid request, Record not matched with ${req.query.id} ID.`,
                code: 404,
                errors: fieldError
            }
        });

    }
    catch (err) {
        res.json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};

exports.deleteAllToDo = async (req, res) => {
    try {
        let data = await ToDoModel.count();

        if (data > 0) {

            await ToDoModel.destroy({
                truncate: true
            });

            return res.json({
                success: true,
                data: [],
                message: `Records Deleted.`,
                code: 204
            });
        }
        res.json({
            success: false,
            error: {
                messege: `Invalid request, ${data} record found.`,
                code: 404,
                errors: fieldError
            }
        });
    }
    catch (err) {
        res.json({
            success: false,
            error: {
                message: err.message,
                code: 500
            }
        });
    }
};
