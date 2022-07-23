import React from 'react'
import Navbar from './Navbar';
const Contactus = () => {
    return (
        <>
        {/* <Navbar/> */}
<section className="contactus-section">
     <div className="container">
         <div className="row">
             <div className="col-md-12 col-lg-10 mx-auto">
             <div className="row">
                 <div className="contact-lefftside col-12 col-lg-5">
                     <h1 className="main-heading">
                         Contact to Our Team
                     </h1>
                     <p className="main-hero-para">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                     Etquia quis?Lorem ipsum, dolor sit amet consectetur
                     </p>
                     <figure>
                         <img src="./images/contactus.jpg" alt="" className="img-fluid" />
                     </figure>
                 </div>
              
                 <div className="contact-rightside col-12 col-lg-7">
                    <form action=""method='POST'>
                        <div className="row"> 
                            <div className="col-12 col-lg-6 contact-input-field">
                              <input type="text" class="form-control" id=" " placeholder="Name" / > 
                           </div>

                           <div className="col-12 col-lg-6 contact-input-field">
                              <input type="email" class="form-control" id=" " placeholder="Email" / > 
                           </div>
                        </div> <br/>
                        <div className="row"> 
                            <div className="col-12 col-lg-6 contact-input-field">
                              <input type="number" class="form-control" id=" " placeholder="Number" / > 
                           </div>

                           <div className="col-12 col-lg-6 contact-input-field">
                              <input type="text" class="form-control" id=" " placeholder="service" / > 
                           </div>
                        </div>
                        <br/>
                        <div className="col-12 col-lg-12 contact-input-field">
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                           </div>

                        <br/>
                        <button type='submit' className='btn btn-style w-100'> Submit</button>

                    </form>
                 </div>
                 </div>
             </div>
         </div>
     </div>
</section>
        </>
    )
}

export default Contactus;
