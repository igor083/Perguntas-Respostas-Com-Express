const express = require("express");
const app = express();

//informando ao express que o ejs é o renderizador de html
app.set('view engine','ejs');
app.use(express.static('public'));//carregar arquivos estaticos,css,fotos etc


app.get("/",(req,res) => {
    //metodo render busca na pasta views o arquivo em html ou derivados
    res.render("index");
});


app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});








//subindo o app
app.listen(8080,()=>{
    console.log("App rodando!")
});
