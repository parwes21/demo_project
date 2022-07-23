const mongoose = require('mongoose')

const signUpTemplet = new mongoose.Schema({
    fullName:{
            type:String,
            required:true
            },
    username:{
            type:String,
            required:true
            },
    email:{
            type:String,
             required:true
            },
    number:{
                type:Number,
                required:true
                },     
    password:{
            type:String,
            required:true
            },
    date:{
            type:Date,
            default:Date.now
            }        
})

signUpTemplet.path('email').validate(()=>{return false},
 'Email Already Exists')
 signUpTemplet.path('username').validate(()=>{return false},
 'username Already Exists')

module.exports = mongoose.model('mytable', signUpTemplet)