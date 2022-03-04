const mongoose = require("mongoose")

const mongo_uri = "mongodb://127.0.0.1:27017/myapp"

const connexion = mongoose.createConnection(mongo_uri)

const {ArticleSchema,UserSchema} = require("./schemas.js")

//console.log(connexion)

//CREATE USER
//CREATE ARTICLE

function loadUsers(){
    let UserCollection = connexion.model("BlogUsers",UserSchema)

    let admin = {
        name : "Joan", 
        mail : "joanzaf@lilo.org",
        password : "4865163",
        role : "admin"
    }

    UserCollection.insertMany(admin)
    .then(console.log("ok"))
    .catch(console.log)
}


function loadFirtArticle () {
    let Collection = connexion.model("Article",ArticleSchema)
    let firstArticle = {
        title: "contruire un dictionnaire",
        author : "BendoFlex",
        category_id : "decouvrir",
        content :"aujourd'hui on va explorer le domaine du langage , et aborder  l'analyse des fréquences  : un outil de recherche ayant rapport avec le langage",
        tags : {
            name :"langue",
            description : "etude de langue"
        },
        quizz : {
            question : "Qu'est ce l'analyse des fréquences? ",
            responses : [
                "une operation financière",
                "un outil de recherche ayant rapport avec le langage",
                "un outil de radio",
                "l'etude de la regularite"
            ]
        }
    }
    Collection.insertMany(firstArticle)
    .then(function(){
      console.log(" : Data inserted")  // Success
    })
    .catch(function(error){
      console.log(error)      // Failure
    });
}


async function getArticles () {
    let articleColl= connexion.model("Article",ArticleSchema)

    let articles = await articleColl.find()

    return articles
}

 async function getUserByName (name) {
    let userColl= connexion.model("BlogUsers",UserSchema)

    return await userColl.find({name:name})
    //console.log(articles)
}



 async function getArticleById(id){
    let articleColl = connexion.model("Article",ArticleSchema)

    return await articleColl.find({_id:id})
}

//loadUsers()
//console.log(getArticleById("62222171b8ab7358d3bc02d2"))


module.exports = {
    getArticleById , getArticles , getUserByName
}