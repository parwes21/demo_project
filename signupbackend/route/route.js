const express= require('express');
const router = express.Router();
const signUpTempletCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response)=>{
    // response.send(demowebsite)
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword= await bcrypt.hash(request.body.password, saltPassword)
    const signedUpUser = signUpTempletCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        number:request.body.number,
        password:securePassword
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json({error})
    })
});

router.get('/signupdetails', async (request, response)=>{
    // response.send(demowebsite)
    try{
        const getData = await signUpTempletCopy.find();
        console.log(signUpTempletCopy)
        response.json(getData)
    }catch(error){
        response.json(error)
    }

});

// router.put('/signupedit', async (request, response)=>{
//         const editUser = signUpTempletCopy({
//         id:request.body.id,
//         fullName:request.body.fullName,
//         username:request.body.username,
//         email:request.body.email,
//         number:request.body.number,
//      })
//      editUser.findById(id, (uodateUser)=>{
//         uodateUser.fullName= editUser;
//         uodateUser.username= editUser;
//         uodateUser.email= editUser;
//         uodateUser.number= editUser;
//         uodateUser.save();   
//      })
//     })
module.exports = router