const Sequelize = require('sequelize');

const sequelize = new Sequelize('tournament', 'postgres', 'postgres123', {dialect: 'postgres', host: 'localhost', port: '5433'});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


