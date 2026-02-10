const Credential = require('../models/user')
async function handleLogin(req,res){
    const {username, password}= req.body;
    const user = await Credential.findOne({username})
    if(!user){
        return res.status(404).json({msg:"User does not exist 🤔"})
    }
    if(user.password !== password){
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
    await Credential.create({name:data.name, username:data.username, password:data.password})

    res.json({msg:"User added successfully 👍!!!"})
}

async function handlePasswordEdit(req,res) {
    const {name, username, password, newpassword} = req.body;
    if(!name || !username || !password || !newpassword){
        return res.status(400).json({msg:"Empty fields 😒"})
    }
    const user = await Credential.findOneAndUpdate({name, username, password},{password:newpassword})
    if(!user){
        return res.status(404).json({msg:"Invalid credentials or user does not exist"})
    }
    res.json({msg:"Password updated 🔏"})
}

async function handleDelete(req,res) {
    const {name, username, password} = req.body;
    if(!name || !username || !password){
        return res.status(400).json({msg:"Empty fields 😒"})
    }
    const data = await Credential.findOneAndDelete({name,username,password});
    if(!data){
        return res.status(401).json({msg:"Details invalid 🤬"})
    }
    res.json({msg:"user deleted 🙋‍♂️"})
}
module.exports = {handleLogin, handleAddUser, handlePasswordEdit, handleDelete}