import {useState} from 'react'
import howToUseApp from './API/howToUseApp';
import Navbar from './Navbar';


const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUseApp);
    return (
        <> 
           {/* <Navbar/>   */}
<section>
   <div className='common-section our-services'> 
     <div className="container mb-5">
        <div className='row'>
         {/* left side */}
         <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
             <img src="./images/appuse.jpg" alt="" />
         </div>
           {/* right side */}
         <div className='col-12 col-lg-7 our-service-list'>
             <h3 className="mini-title">
                 ---Available @ GOOGLE & ISO App Store 
             </h3>
            <h1 className='main-heading'> How To Use App ? </h1>
                    { aboutData.map((currEle)=>{
                        const {id, title, info} = currEle;
                        return(<>
                        <div className="row our-services-info">
                    <div className="row our-services-number">{id}</div>
                    <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                        <p className="main-hero-para">
                        {info}
                        </p>
                    </div>
                    </div> 
                        </>)
                    })}
            <br/>
                 <div className="text-center">
                   <button className="btn-style btn-style-border"> lern more </button>      
                 </div> 
         </div>
        </div>     
     </div>
</div>   
</section>
<section>
   <div className='common-section our-services'> 
     <div className="container mb-5">
        <div className='row'>
                  {/* Left side */}
         <div className='col-12 col-lg-7 our-service-list'>
             <h3 className="mini-title">
                 ---Support In any Languages
             </h3>
            <h1 className='main-heading'> World Class Support Available 24/7  </h1>
                    { aboutData.map((currEle)=>{
                        const {id, title, info} = currEle;
                        return(<>
                        <div className="row our-services-info">
                    <div className="row our-services-number">{id}</div>
                    <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                        <p className="main-hero-para">
                        {info}
                        </p>
                    </div>
                    </div> 
                        </>)
                    })}
            <br/>
                <div className="text-center">
                   <button className="btn-style btn-style-border"> lern more </button>      
                </div>
         </div>
           {/* left side */}
           <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
             <img src="./images/support.jpg" alt="" />
         </div>
        </div>     
     </div>
</div>   
</section>          
        </ >
    )
}

export default Aboutus;
