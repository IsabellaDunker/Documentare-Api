const User = require('../models/User');

class UserController {
  static async store(req, res) {
    const {body} = req;

    try {
      const user = await User.create(body);

      return res.status(201).json(user);
    } catch (error) {
      if (error) {
        return res.status(400).json({ error: 'Tente novamente'});
      }
    }
  }

  static async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user == null) {
      return res.status(400).json({ error: 'Usuario não encontrado.'});
    }

    return res.json(user);
  }

  static async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}

module.exports = UserController;