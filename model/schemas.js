const mongoose = require("mongoose")



const QuizzSchema = new mongoose.Schema(
    {
        question : {type:String, required:true},
        responses : {type:Array}
    }
)



const TagSchema = new mongoose.Schema(
    {
        name : {type:String, required:true},
        description : {type:String, required:true}
    }
)

const ArticleSchema = new mongoose.Schema(
    {
        title : {type :String , required :true},
        author : {type:String , required : true},
        category_id : {type:String,required:true},
        content : {type:String,required:true},
        tags : [TagSchema],
        quizz : [QuizzSchema]
    }
)

const UserSchema = new mongoose.Schema({
    name : {type:String,required:true},
    mail : {type:String,required:true},
    password : {type:String,required:true},
    role : {type:String,required:true},
})


module.exports = {UserSchema,ArticleSchema}