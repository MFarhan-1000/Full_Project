const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    message:{
        type: String
    },
    media:{
        url:{
            type: String
        },
        filename:{
            type:String
        },
        mimetype:{
            type: String
        }
    }
})


const Post = mongoose.model("Post", PostSchema)

module.exports = Post