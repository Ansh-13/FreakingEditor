const express = require('express');

const router = express.Router();
const Userauth = require('../models/user_auth.js')

router.use(express.json())

router.get('/login',(req,res) => {
    const {username,password} = req.body
    res.json({username,password})
})

router.post('/signup', async (req,res) =>{
    const {email,username,password} =  req.body
    try{
        const user = Userauth.signup(email,username,password);
        res.status(200).json({email,user})
    } catch (error) {
        res.status(400).json(error,error.message)
    }
})

router.patch('/forgotpassword',(req,res) => {
    res.json({msg:"user wants to update password"})
})

router.patch('/newusername',(res,req)=>{
    res.json({msg:"user wants to change username"})
})

module.exports = router