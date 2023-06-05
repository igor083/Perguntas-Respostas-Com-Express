//model de pergunta 

const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    pergunta:{
        type: Sequelize.TEXT,
        allowNull:false

    }
});
Pergunta.sync({force:false}).then(()=>{});
