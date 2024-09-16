import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import img2 from '../component/img/about-overview-08.jpg'

const About = () => {
  return (
    <>
    <Navbar />
    
    <div className="row">
        <div className="col-md-6 ms-auto my-auto">
            <h1> About Us</h1>
            <p className='text-justify'>
            KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations.
            Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems. Beyond business, we are a responsible brand that values empowering people, uplifting society and enriching the environment.
            </p>
        </div>
        <div className="col-md-4 me-auto ms-50">
            <img  src={img2} alt="No"/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default About