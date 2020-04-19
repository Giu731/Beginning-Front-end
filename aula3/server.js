const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()


server.use(express.static('public'))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})



server.get("/", function(req, res){
    const dataAbout = {
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
    }
    return res.render("content", {items: courses, about: dataAbout})
})

server.get("/description", function(req, res){
    const dataAbout = {
        logo: "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
        title: "Rocketseat",
        role: "Sobre a empresa",
        description: "Busca abrir um mundo de possibilidades através do ensino da programação para todos.",
        techs: [
            {name: "JavaScript"},
            {name: "JavaScript ES6"},
            {name: "CSS"},
            {name: "HTML"},
            {name: "ReactJS"},
            {name: "React Native"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
    }
    return res.render("description", {about: dataAbout})
})

// server.get("/courses/:id", function(req, res) {
//     const id = req.params.id;
  
//     return res.send(`O id fornecido na rota é: ${id}`);
//   });

server.get("/course/:id", function(req, res) {
    const id = req.params.id
    const course = courses.find(function(course){
        if (course.id == id){
            return true
        }
    })
    // return res.send(`O id fornecido na rota é: ${id}`)
    return res.render("coursespage", {item: course})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})


server.listen(5000, function(){
    console.log("server is running")
})
