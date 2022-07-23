import {useState} from 'react'
import serviceapi from './API/Serviceapi';
import Navbar from './Navbar';

const Services = () => {
 const [serviceData, setServiceData] = useState(serviceapi)
    return (
        <>
        {/* <Navbar /> */}
<section className="service-main-container">
    <div className="container service-container">
        <h1 className='main-heading text-center fw-bold'>How to Send Money</h1>
    </div>
    <div className="row rowservice" >
        {serviceData.map((serviceEle)=>{
            const{ logo, title, info}=serviceEle;
            return(
                <>
                <div className="col-11 col-lg-4 col-xxl-4  work-container-subdiv">
                <i className={`fontawesome-style ${logo}`}></i> 
                    <h2 className='sub-heading'>{`${title}`} </h2>
                    <p className='main-hero-para w-100'>
                        {`${info}`}
                    </p>
                </div>
                </>
            )
        })}
        
    </div>
</section>
        </>
    )
}

export default Services;
