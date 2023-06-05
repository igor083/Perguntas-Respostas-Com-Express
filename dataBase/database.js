const Sequelize = require('sequelize');

const connection = new Sequelize('siteperguntas','root' , 'Senharoot',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;