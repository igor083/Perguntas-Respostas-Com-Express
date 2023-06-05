const express = require("express");
const app = express();

//informando ao express que o ejs é o renderizador de html
app.set('view engine','ejs')


app.get("/:nome/:ling",(req,res) => {
    //metodo render busca na pasta views o arquivo em html ou derivados
    var nome = req.params.nome;
    var ling = req.params.ling;
    var exibirmsg=false;

    var produtos = [
        {nome:"doritos",preco:3.14},
        {nome:"cheetos",preco:2.50},
        {nome:"coca-cola",preco:3.50}
    
    ];
    
    res.render("index",{
        nome:nome,
        ling:ling,
        inscritos:300,
        msg:exibirmsg,
        produtos:produtos
    });
});








//subindo o app
app.listen(8080,()=>{
    console.log("App rodando!")
});
