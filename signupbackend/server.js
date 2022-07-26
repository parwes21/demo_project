const express = require('express');
const app= express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./route/route')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("Database Connected"))  

app.use(express.json())
app.use(cors())

app.use('/app',routeUrls )
app.listen(3001, () =>{
    console.log('server is running')
})