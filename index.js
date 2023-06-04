const express = require("express");
const app = express();

//informando ao express que o ejs é o renderizador de html
app.set('view engine','ejs')





app.get("/",(req,res) => {
    //metodo render busca na pasta views o arquivo em html ou derivados
    res.render("index.ejs");
});
app.get("/home",(req,res) => {
    //metodo render busca na pasta views o arquivo em html ou derivados
    res.render("home.ejs");
});



app.listen(8080,()=>{
    console.log("App rodando!")
});
