const db = require("../models");
const Todo = db.todos;


exports.getTodos = (req, res) => {
  const id = req.query.userId;
  const condition = (userId === id);

  Todo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:"Нет активных задач"});
    });
};

exports.create = async (req, res) => {
	try {
		if (!req.body.title) {
			res.status(400).send({
				message: "Введите название задачи"
			});
		
			const todo = await {
				title: req.body.title,
				description: req.body.description,
				userId: req.body.userId
			};
			Todo.create(todo)
    .then(data => {
      res.send(data);
    });
		};
	} catch(error) {
		return res.status(500).send({message: error.message})
	};
};

exports.update = async (req, res) => {
  const id = await req.params.todoId;

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
  const id = await req.params.todoId;

  Tutorial.destroy({
    where: { todoId: id }
  })
    .catch(error => {
      res.status(500).send({
        message: err.message
      });
    });
};
