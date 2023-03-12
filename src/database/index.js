const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const User = require('../models/User');
const Product = require('../models/Product');
const connection = new Sequelize(dbConfig);

User.init(connection);
Product.init(connection);

module.exports = connection;