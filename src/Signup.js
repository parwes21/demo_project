import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import signUpTemplet from '../signupbackend/models/SignUpModels.js'
 
function Signup() {
 const [userData, setuserData] = useState([])
 useEffect(async ()=>{ 
   await axios.get('http://localhost:3001/app/signupdetails')
   .then(response => { console.log(response)
      setuserData(response.data)})   
   .catch(error=>console.log(error))
 },[])
 
 
   const [inputField , setInputField] = useState({
       fullName: '',
       username: '',
       email: '',
       number: '',
       password:''
   })
   
 
   
   const inputsHandler = (e) =>{
       const { name, value } = e.target;
      setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));
   }
   
   const submitButton = (e) =>{
      if(inputField.fullName === "" ||inputField.fullName === "" ){
         alert("this field Requied");
      }else{
         const registered  = {
            fullName:inputField.fullName,
            username:inputField.username,
            email:inputField.email,
            number:inputField.number,
            password:inputField.password 
        }
        axios.post('http://localhost:3001/app/signup',registered)
      .then(response =>console.log(response.data)).catch(error=>console.log(error))
      //  console.log(registered);
      setInputField({fullName: '',
      username: '',
      email: '',
      number: '',
      password:''}
      )
      alert("Submited")
      }
      // alert(inputField.fullName);
       // alert(inputField.fullName) 

   }
   // axios.post('http://localhost:3001/app/signupdetails')
   // .then(response =>console.log(response.getData)).catch(error=>console.log(error))

   
//  useEffect(()=>{
//     Axios.get('http://localhost:3001/app/signupdetails')
//     .then(response =>console.log(response.getData)).catch(error=>console.log(error))
//  })
  
   return (
       <>
   <h1 className='text-center mt-5'>  Registration Form </h1>
    <div className="row">
       <div className="col-lg-3">
           <h1 className='text-center'>  </h1>
       </div>
       <div className="contact-rightside col-lg-6 text-center pt-5 ml-4 ce">
          <form >
                          <div className="col-12 col-lg-12 contact-input-field">
                             <input type="text" value={inputField.fullName} onChange={inputsHandler} name="fullName" className="form-control" id=" " placeholder="fullName" / > 
                             <br/></div> 
                       <div className="row"> 
                    
                          <div className="col-12 col-lg-6 contact-input-field">
                             <input type="text" value={inputField.username} onChange={inputsHandler} name="username" className="form-control" id=" " placeholder="username" / > 
                          </div>

                          <div className="col-12 col-lg-6 contact-input-field">
                             <input type="email" value={inputField.email} onChange={inputsHandler} name="email" className="form-control" id=" " placeholder="email" / > 
                          </div>

                       </div> <br/>
                       <div className="row">  
                          <div className="col-12 col-lg-6 contact-input-field">
                             <input type="number" min="10"  value={inputField.number} onChange={inputsHandler} name="number" className="form-control" id=" " placeholder="number" / > 
                          </div> 
                          <div className="col-12 col-lg-6 contact-input-field"> 
                             <input type="password" value={inputField.password} onChange={inputsHandler} name="password" className="form-control" id=" " placeholder="password" / > 
                          </div>
                       </div>
                       
                       <br/>  
                       <button type='submit' onClick={submitButton} className='btn btn-style w-100'> Submit</button>

            </form>
         </div>
   </div>
   
    {/* User info Table */}
 <div className="container pt-5 " >
 <table className="table table-striped">
    <thead>
      <tr>
        <th>id </th>
        <th>Full Name </th>
        <th>User Name</th>
        <th>Email</th>
        <th>Number</th>
      </tr>
    </thead>
    <tbody>
    { 
    userData.map((dataEle,index)=> 
         // const {fullName, username, email, number} = dataEle; 
      <tr key={index}>
        <td >{index + 1}</td>
        <td >{dataEle.fullName}</td>
        <td>{dataEle.username}</td>
        <td>{dataEle.email}</td>
        <td>{dataEle.number}</td> 
      </tr> 
        ) 
      }  
      
    </tbody>
    
  </table>
    
</div>
           
       </>
   )
}

export default Signup;
