const Product = require('../models/Product');

class ProductController {
  static async store(req, res) {
    const {body} = req;

    try {
      const product = await Product.create(body);

      return res.status(201).json(product);
    } catch (error) {
      if (error) {
        return res.status(400).json({ error: 'Tente novamente'});
      }
    }
  }

  static async show(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (product == null) {
      return res.status(400).json({ error: 'produto não encontrado.'});
    }

    return res.json(product);
  }

  static async index(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }
}

module.exports = ProductController;