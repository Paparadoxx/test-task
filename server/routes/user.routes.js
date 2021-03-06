const controller = require("../controllers/todo.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get( "/user/todos/:userId", controller.getTodos);

  app.get("/user/todo/:todoId", controller.findOne);

  app.delete("/user/todos/:todoId", controller.delete);

  app.post("/user/todos", controller.create);

  app.put("/user/todos/:todoId", controller.update);

};