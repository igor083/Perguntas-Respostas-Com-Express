const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./dataBase/database");
const Pergunta = require("./dataBase/Pergunta");
const { where } = require("sequelize");

//database
connection
.authenticate()
.then(()=>{
    console.log("Conexao realizada com o banco")
}).catch((msgErro)=>{
    console.log(msgErro)
})



//informando ao express que o ejs é o renderizador de html (view engine)
app.set('view engine','ejs');
app.use(express.static('public'));//carregar arquivos estaticos,css,fotos etc

app.use(bodyParser.urlencoded({extended:false}))//traduz dados enviados pelo form em estruturas js
app.use(bodyParser.json());


//rotas
app.get("/",(req,res) => {
    Pergunta.findAll({raw:true, order:[
        ['id','DESC']//enviando para o front a ordenacao das perguntas com base no id da database
    ]}).then(perguntas =>{
        res.render("index",{//jogando as perguntas para o front
            perguntas:perguntas
        });
    });//SELECT * FROM perguntas
    
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var nome = req.body.nome;//Salvando dados do form na variavel
    var pergunta = req.body.pergunta;//Salvando dados do form na variavel
    Pergunta.create({//INSERT  na tabela perguntas
        nome:nome,
        pergunta:pergunta,
    }).then(()=>{
        res.redirect("/")//se conseguir vai direcionar usuario para pagina principal
    })
});


app.get("/pergunta/:id",(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id:id}
    }).then(pergunta=>{
        if(pergunta!= undefined){//pergunta encontrada
            res.render("pergunta",{
                
                pergunta:pergunta
            });
        }else{
            res.redirect("/");
        }
    })
})


//subindo o app
app.listen(8080,()=>{
    console.log("App rodando!")
});
