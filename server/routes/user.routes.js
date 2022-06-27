const { authJwt } = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/user/todos",
    [authJwt.verifyToken],
    controller.getTodos
  );
};