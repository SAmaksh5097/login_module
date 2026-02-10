const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required:true
    }
},{timestamps:true})

const Credential =mongoose.model('credential',Schema)

module.exports = Credential