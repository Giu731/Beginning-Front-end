const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

const server = express()

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

server.listen(5000, function(){
    console.log('server is running')
})

server.get("/", function(req, res){
    return res.render("home", {items: receitas})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: receitas})
})

server.get("/receitas/:index", function (req, res) {
    const recipes = receitas
    const recipeIndex = req.params.index

    console.log(recipes[recipeIndex])
    return res.render("paginareceita", {item: recipes[recipeIndex]})
})

server.use(express.static('public'))