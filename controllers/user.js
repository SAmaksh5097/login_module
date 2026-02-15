const Credential = require('../models/user')
const brcypt = require('bcrypt')
async function handleLogin(req,res){
    const {username, password}= req.body;
    const user = await Credential.findOne({username})
    if(!user){
        return res.status(404).json({msg:"User does not exist 🤔"})
    }
    const isMatch = await brcypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({msg:`Invalid password 😢`})
    }
    return res.status(200).json({msg:`Login successful 😊 HELLO ${user.name}`})
} 
async function handleAddUser(req,res) {
    const data = req.body;
    if(!data.name || !data.username || !data.password){
        return res.status(400).json({msg:"Empty fields 😒"})
    }
    const user = await Credential.find({username:data.username})
    if(user.length!==0){
        return res.status(409).json({msg:"username already exist 👎"})
    }
    const hashedPassword = await brcypt.hash(data.password,10)
    await Credential.create({name:data.name, username:data.username, password:hashedPassword})

    res.json({msg:"User added successfully 👍!!!"})
}

async function handlePasswordEdit(req,res) {
    const {name, username, password, newpassword} = req.body;
    if(!name || !username || !password || !newpassword){
        return res.status(400).json({msg:"Empty fields 😒"})
    }
    const user = await Credential.findOne({name, username})
    if(!user){
        return res.status(404).json({msg:"user does not exist"})
    }
    const isMatch = await brcypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({msg:"Invalid password 😢"})
    }
    const newhashed = await brcypt.hash(newpassword,10)
    await Credential.updateOne({name, username},{$set:{password:newhashed}})
    res.json({msg:"Password updated 🔏"})
}

async function handleDelete(req,res) {
    const {name, username, password} = req.body;
    if(!name || !username || !password){
        return res.status(400).json({msg:"Empty fields 😒"})
    }
    const user = await Credential.findOne({name, username})
    if(!user){
        return res.status(401).json({msg:"Details invalid 🤬"})
    }

    const isMatch = await brcypt.compare(password, user.password)
    if(!isMatch){
        return res.status(401).json({msg:"Invalid password"})
    }
    await Credential.findOneAndDelete({name,username})
    res.status(200).json({msg:"user deleted 🙋‍♂️"})
}
module.exports = {handleLogin, handleAddUser, handlePasswordEdit, handleDelete}