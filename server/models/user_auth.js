const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const user_auth_schema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }   
},{timestampes:true})

user_auth_schema.statics.signup = async function (email,username,password)  {
    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email is already exists")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = this.create({email,username,password});
    return user
}

module.exports = mongoose.model('Userauth',user_auth_schema)
