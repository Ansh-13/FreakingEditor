const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user_auth_schema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }   
},{timestampes:true})

module.exports = mongoose.model('Userauth',user_auth_schema)
