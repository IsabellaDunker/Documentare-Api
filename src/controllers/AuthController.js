require('dotenv').config({path: __dirname + '/../../.env'});
var jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = process.env.SECRET;

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if(!user) {
      return res.status(401).json({ message: 'Usuário não existe' });
    }

    if(!(await user.validPassword(password))){
      return res.status(401).json({ message: 'Senha incorreta'})
    }

    const { id, type } = user;

    const token = jwt.sign({ id }, process.env.SECRET);

    res.status(200).json({ auth: true, token: token, type: type });
  }

  static logout(req, res) {
    return res.status(200).json({ auth: false, token: null, type: null });
  }

  static renew(req,res) {
    return res.status(200).json({ auth: true });
  }
}

module.exports = AuthController;