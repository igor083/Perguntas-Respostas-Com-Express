const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./dataBase/database");
const perguntaModel1 = require("./dataBase/Pergunta")

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
    //metodo render busca na pasta views o arquivo em html ou derivados
    res.render("index");
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var nome = req.body.nome;
    var pergunta = req.body.pergunta;
res.send("Formulario recebido<br>"+ nome + "<br> "+ pergunta);

});





//subindo o app
app.listen(8080,()=>{
    console.log("App rodando!")
});
