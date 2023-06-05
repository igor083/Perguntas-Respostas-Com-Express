//model de resposta 

const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas",{
    corpo:{type:Sequelize.TEXT,//onde o texto ira ficar salvo
    allowNull:false
    },
    perguntaId:{//referencia do id da pergunta
        type:Sequelize.INTEGER,
        allowNull:false
    }
});
   
Resposta.sync({force:false});

module.exports=Resposta;    
