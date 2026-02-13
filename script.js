const express = require('express')
const app = express()
const port = 3005
const {connectDB} = require('./connection')
const UserRouter = require('./routes/user')

app.use(express.urlencoded({extended:false})) // middleware

connectDB('mongodb://127.0.0.1:27017/login_data').then(()=>{console.log("DB connected")}).catch((err)=>console.log(`Got an error`,err)) // database connected



// routes
app.use("/login",UserRouter)


app.listen(port,()=>{
    console.log("Server started");
    
})