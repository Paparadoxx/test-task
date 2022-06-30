const db = require("../models");
const Todo = db.todo;


exports.getTodos = async (req, res) => {  
  try {
    const id = req.query.UserId;
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
      const  todo = await {
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

exports.update = (req, res) => {
  const id = req.params.todoId;

	if (!req.body.title) {
		res.status(400).send({
			message: "Введите название задачи"
		});
  Todo.update(req.body, {
    where: { todoId: id }
  })
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
	};
}

exports.delete = async (req, res) => {
  try {
    const id = req.params.todoId;
    await Todo.destroy({where: { todoId: id}})
  } catch (error) {
    return res.status(500).send("ошибка при удалении задачи");
      };
};

exports.findOne = async (req, res) => {
  try {
  const id = await req.params.todoId;
  Todo.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Запись не найдена`
        });
      }
    })
    } catch(error) {
      res.status(500).send({
        message: error.message
      });
    };
};
