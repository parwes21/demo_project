import { useState } from "react"
import workapi from "./API/workapi.js"

const HowItWorks = () => {

    const[workData, setWorkData] = useState(workapi);
    // console.log(workData);
    return (
        <>
         <section>
        <div className='work-container container'>
            <h1 className='main-heading text-center'> How Does It Work </h1>
            <div className="row">
                {workData.map((currentEle)=>{
                    const {id, logo, title, info}= currentEle;
                    return (
                        <>
                         <div className="col-12 col-lg-4 text-center work-container-subdiv">
                          <i className={`fontawesome-style ${logo}`} ></i> 
                        <h2 className='sub-heading'>{`${title}`} </h2>
                        <p className='main-hero-para w-100'>
                         {`${info}`}
                        </p>
                        </div>
                        </>
                    )
                })}
               
            </div>
        </div>     
         </section>   

         
        </>
    )
}

export default HowItWorks;
