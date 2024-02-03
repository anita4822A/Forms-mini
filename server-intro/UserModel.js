const mongoose = require("mongoose"); //import mongoose
//schema mtlv structure

const userSchema = new mongoose.Schema({
    
    name: String,
    age: Number

},{ timestamps: true})

const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel