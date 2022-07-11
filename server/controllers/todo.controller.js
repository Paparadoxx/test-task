const db = require("../models");
const Todo = db.todo;


exports.getTodos = async (req, res) => {  
  try {
    const id = req.params.userId;
    const todos = await Todo.findAll({ where: {userId: id}})
      if (!todos) {
    return res.status(500).send({ message:"Нет активных задач"});
    }
    return res.status(200).send ({todos});
    } catch(error) {
  return res.status(500).send({ message: error.message });
  };
};

exports.create = async (req, res) => {
  try {
		if (!req.body.title) {
			res.status(400).send({
				message: "введите название задачи"
			});
      return;
    };
      const todo = await {
				title: req.body.title,
				description: req.body.description,
				userId: req.body.userId,
        todoId: req.body.todoId,
			};
			 Todo.create(todo)
    .then(data => {
      res.send(data);
    })
  } catch(error) {
		return res.status(500).send({message: error.message})
	};
};

exports.update = async (req, res) => {
try {
	if (!req.body.title) {
		res.status(400).send({
			message: "Введите название задачи"
		});
    return;
  };
  const id = await req.params.todoId;
  Todo.update(req.body, {
    where: { todoId: id }
  })
  .then(data => {
    res.send(data);
  })
  } catch(error) {
    res.status(500).send({
      message: error.message
    });
  };
};

exports.delete = async (req, res) => {
  try {
    const id = await req.params.todoId;
    Todo.destroy({where: { todoId: id}})
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Задача удалена"
        });
      } else {
        res.send({
          message: "ошибка при удалении задачи!"
        });
      }
    })
  } catch (error) {
    return res.status(500).send("ошибка при удалении задачи!!");
    };
};

exports.findOne = async (req, res) => {
  try {
  const todoId = req.params.todoId;
  const todos = await Todo.findByPk(todoId)
  if (!todos) {
    return res.status(500).send({ message:"Задача не найдена"});
    }
    return res.status(200).send ({todos});
    } catch(error) {
  return res.status(500).send({ message: error.message });
};
};

