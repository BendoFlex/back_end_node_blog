const http = require("http") 
const express = require("express")
const PORT = 3000

const server = express()

server.get("/articles", (req,res) => {
    res.end("...get all blog post")
})

server.get("/articles/:id", (req,res) => {
    res.end("...get article n° "+req.id)
})

server.get("/user/:id", (req,res) => {
    res.end("...get user info "+req.id)
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