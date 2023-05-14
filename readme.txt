STEP 1: Open phpmyadmin make database with "todo" name
STEP 2: Open root directory - In terminal hit command "npm install"
STEP 3: In root directory - In terminal hit command "npm start"

Now, back-end server is ready.

NOTE -

When  you send request for create you have to send with below keys other wise it will generate the error at the back-end.

todoTitle        - its a required field
todoDescription  - not required

ROUTE -

router.get('/api/all-tasks', getAllTasks);
router.get('/api/task', getTask);
router.post('/api/create-new', createToDo);
router.put('/api/update', updateToDo);
router.delete('/api/delete', deleteToDo );
router.delete('/api/delete-all', deleteAllToDo );


How to pass query string ?

1. view single todo
GET  =>  http://localhost:3001/api/task?id=1

2. update single todo (put method)
PUT  =>  http://localhost:3001/api/update?id=1

3. delete single record 
DELETE => http://localhost:3001/api/delete?id=1











