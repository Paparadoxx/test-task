const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
      if (!user) {
        return res.status(404).send({ message: "Пользователь не найден" });
      }

      const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Неверный пароль",
        });
      }

      const token = jwt.sign({ id: user.userId }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
       return res.status(200).send ({
        id: user.userId,
        username: user.username,
        email: user.email,
        accessToken: token,
       });
    } catch(error) {
      return res.status(500).send({ message: error.message });
    };
};