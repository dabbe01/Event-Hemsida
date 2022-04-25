import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    eventname: String,
    eventinfo: String,
    skaparen: String,
    link: String,
    selectedFile: String,
    date_start: Date,
    date_end: Date,
    city: String,
    adress: String,
    createdAt: {
        type: Date,
        default: new Date()
    }   

})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage