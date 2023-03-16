const User = require('../models/User');

class UserController {
  static async store(req, res) {
    const { body } = req;

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

    const user = await User.scope('withoutPassword').findByPk(id);

    if (user == null) {
      return res.status(400).json({ error: 'Usuario não encontrado.'});
    }

    return res.json(user);
  }

  static async index(req, res) {
    const users = await User.scope('withoutPassword').findAll();
    return res.json(users);
  }

  static async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    await User.update(body, {
      where: {
        id: id,
      },
    });

    const user = await User.scope('withoutPassword').findByPk(id);

    if (user == null) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ error: 'Atualizado com sucesso! ', user });
  }

  static async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user == null) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    await User.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: 'Excluido com sucesso! ' });
  }
}

module.exports = UserController;