const mongoose = require("mongoose")

const connectDb = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/forms-mini")
    if(connection){
        console.log("connection Established")
    }
}
module.exports = {connectDb}