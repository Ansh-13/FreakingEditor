const express = require('express');

const router = express.Router();
const Userauth = require('../models/user_auth.js')

router.use(express.json())

router.get('/login',(req,res) => {
    const {username,password} = req.body
    res.json({username,password})
})

router.post('/signup', async (req,res) =>{
    try{
        const {username,password} = req.body
        console.log('request has been made')
        const user = await Userauth.create({username,password})
        console.log("this is working")
        console.log(user)
        res.status(200).json(user)
    } catch{(err) => {
        res.status(400).json({err:err.message})
    }}
})

router.patch('/forgotpassword',(req,res) => {
    res.json({msg:"user wants to update password"})
})

router.patch('/newusername',(res,req)=>{
    res.json({msg:"user wants to change username"})
})

module.exports = router