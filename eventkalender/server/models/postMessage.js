import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    eventname: String,
    eventinfo: String,
    skaparen: String,
    link: String,
    selectedFile: String,
    datestart: Date,
    dateend: Date,
    city: String,
    adress: String,
    createdAt: {
        type: Date,
        default: new Date()
    }   

})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage