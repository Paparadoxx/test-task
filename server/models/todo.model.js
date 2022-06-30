module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
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
      field: 'created_at',
      type: Sequelize.DATE,
      allowNull: false, 
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
  },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });

  return Todo;
};