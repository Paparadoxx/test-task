const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    define: {
      timestamps: false
    },
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.todo = require("../models/todo.model")(sequelize, Sequelize);

db.user.hasMany(db.todo, {
  foreignKey: "userId"
});
db.todo.belongsTo(db.user, {
  foreignKey: "userId",
  onDelete: "CASCADE", 
  onUpdate: "RESTRICT",
});

module.exports = db;