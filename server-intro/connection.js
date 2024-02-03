const mongoose = require("mongoose");

const connectDb = async () => {
 const connection = await mongoose.connect("mongodb://127.0.0.1:27017/users-db")
 if (connection){
    console.log("connected to DB")
 } else {
    console.log("Connection failed to DB")
 }

}

module.exports = {connectDb}