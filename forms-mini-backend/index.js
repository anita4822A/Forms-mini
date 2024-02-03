const express = require("express");
const app = express()
const port = 5000;
const { connectDb } = require("./connection")
const UserModel = require("./models/UserModel")
const cors = require("cors")

connectDb()
app.use(express.json())
app.use(cors())

app.post("/api/postData", async (req, res) => {
 const { name, email, phone, message } = req.body // destructing

try{
    
  let user = await UserModel.create({ name, email, phone, message})
  await user.save()   
  res.status(201).json({success: true, message: "User Created Sucessfully"})

  }
catch (error) {
    res.status(500).json({success: false, message: error.message})
}
})

app.get("/api/getData", async (req,res) => {
  
 try{
  let users = await UserModel.find({});
  if(!users) {
    return res.status(404).json({success: false, message: "No user found"})
  }
  res.status(200).json({success: true, message: "User fetched", users })
      
 }
 catch (error) {
  res.status(500).json({success: false, message: error.message })
 }

})

app.delete("/api/deleteData/:id", async (req,res) => {
  const { id } = req.params
  try { 
    let user = await UserModel.findByIdAndDelete(id)
    if (!user){
      return res.status(404).json({success: false, message: "user not found"})
    } 
    else{
      res.status(200).json({success: true, message: "User Deleted Sucessfully"})
    }
    }catch (error) {
    res.status(500).json({success: false, message: error.message })
  }
})


app.listen(port, ()=>{
    console.log(`server running at port : ${port}`)
})