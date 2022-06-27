module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todos", {
    todoId: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false, 
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });

  return Todo;
};