const express  = require('express');
require("dotenv").config()

const app = express();

const mongoose = require('mongoose')

const user_auth = require('./routers/user_auth')
const editor = require('./routers/editor');
const socket = require('./routers/socket');

app.use(express.json())

app.use(user_auth)
app.use('editor/',editor)
app.use('socket/',socket)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.port, () => {
            console.log('database and server is working properly');
        })
    })
    .catch((error) => {console.log(error)})
