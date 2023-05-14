const express = require('express');
const router = express.Router();
const { getAllTasks , createToDo, updateToDo, deleteToDo, deleteAllToDo,  getTask } = require('../controllers/tasks.controllers');

/**  GET => All tasks  */ 
router.get('/api/all-tasks', getAllTasks);

/**  GET => view single tasks  */ 
router.get('/api/task', getTask);

/**  POST => Create new task  */ 
router.post('/api/create-new', createToDo);

/**  PUT => update task  */
router.put('/api/update', updateToDo);

/**  DELETE => DELETE  single task  */
router.delete('/api/delete', deleteToDo );

/**  DELETE => DELETE all task  */
router.delete('/api/delete-all', deleteAllToDo );



module.exports = router;