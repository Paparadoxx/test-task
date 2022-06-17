const express = require('express');

const todosRoutes = require('../controllers/todo-controller');


const router = express.Router()

router.get('/all', todosRoutes.TodosAll)

router.post('/create', todosRoutes.todoCreate)

router.put('/delete', todosRoutes.todoDelete)

router.put('/updateTitle', todosRoutes.todoTitleUpdate)

router.put('/updateDescription', todosRoutes.todoDescriptionUpdate)

module.exports = router