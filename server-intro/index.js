const express = require("express")
const app = express()
const port = 5000
const { connectDb } = require("./connection")
const UserModel = require("./UserModel") //import usermodel

connectDb()

app.use(express.json())




app.get("/api/getData", async (req, res) => {

    let users = await UserModel.find({});
    return res.status(200).json({success: true, message: "Users Fetched", users  })

})

app.post("/api/postData", async (req, res) => {

    let user = await UserModel.create({
        name : req.body.name,
        age : req.body.age
    })

    await user.save()

    return res.status(201).json({
        success: true,
        message: "User created sucessfully"
    })

})
app.put("/api/updateData/:id", async (req,res) => {

    const id = req.params.id
    const age = req.body.age;
    let user = await UserModel.findByIdAndUpdate(id, {
        age : age
    });

    res.status(200).json({success: true, message: "User Updated Successfully"})
})

app.delete("/api/deleteData/:id", async (req,res) => {

    const { id } = req.params //destructing
    let user = await UserModel.findByIdAndDelete(id)
    res.status(200).json({success: true, message: "User deleted Successfully"})
    

})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})