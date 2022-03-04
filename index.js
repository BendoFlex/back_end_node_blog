const http = require("http") 
const express = require("express")
const cors = require("cors")
const {getUserByName,getArticles,getArticleById} = require("./model/db")
const PORT = 3000

const server = express()
server.use(cors())

server.get("/articles", (req,res) => {
    let articles =  getArticles()
    res.json(articles)
})

server.get("/articles/:id", async(req,res) => {
    let articleInfo =  await getArticleById(req.params.id)
    //res.end ne comprend pas json
    res.json(articleInfo)
})

server.get("/user/:name",  (req,res) => {
    let userInfo = getUserByName(req.params.name)
    res.json(userInfo)
})

server.get("/admin/articles", (req,res) => {
    res.end("...modify articles")
})

server.get("/admin/articles/:id", (req,res) => {
    res.end("...modify article n° "+req.params.id)
})


server.listen(PORT, () => {
    console.log("listen "+PORT)
})