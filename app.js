const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.listen(8081, function(){
    console.log("Servidor ativo!")
})
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.get("/", (req,res) =>{
    res.render("index")
})

app.get("/consultar", function(req,res){
    console.log("consultar.handlebars")
    res.render("consultar")
})

app.get("/atualizar", function(req,res){
    console.log("atualizar.handlebars")
    res.render("atualizar")
})

