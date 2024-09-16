import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import img2 from '../component/img/about-overview-08.jpg'
import img3 from '../component/img/core-value.png'
import icon1 from '../component/img/icon1.png'
import icon2 from '../component/img/icon2.png'
import icon3 from '../component/img/icon3.png'
import GlobalPresence from '../component/GlobalPresence'

const Company = () => {
  return (
    <>
   <Navbar/>
   <br/>
   <div className="row">
        <div className="col-md-4 mx-auto my-auto">
            <h1 className='text-center'> About Us</h1>
            <p className='text-justify'>
            KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations.
            </p>
            <br/>
            <p className='text-justify'>Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems. Beyond business, we are a responsible brand that values empowering people, uplifting society and enriching the environment.</p>
        </div>
        <div className="col-md-4 me-auto ms-50">
            <img  src={img2} alt="No"/>
        </div>
    </div>
    <br/>
    <div className="mission-vision-container">
      <div className="mission-vision-content">
        <div className="text-card mission">
          <h2>Mission</h2>
          <p className='text-justify'>
            KARAM is deeply committed to protecting the lives of millions of
            workers working in the Industrial Environment all across the globe
            by manufacturing and providing them with supreme quality of
            Personal Protective Equipment.
          </p>
          <p className='text-justify'>
            We shall achieve this by manufacturing products that exceed the
            quality requirements laid down in various International standards
            and by brilliantly serving our esteemed Customers to answer their
            needs. Our Mission is to save millions of such lives globally and
            make a lasting impact in the field of Personal Safety.
          </p>
        </div>
        <div className="core-values">
          <img src={img3} alt="Core Values" />
        </div>
        <div className="text-card vision">
          <h2>Vision</h2>
          <p className='text-justify'>
            We shall provide the entire range of Fall Protection Equipment to
            the Global market through sustained efforts in R&D, manufacturing
            under cost-effective, safe & systematic processes. We will reach out
            to Customer in more than 100 countries across the globe providing
            prompt and effective services to them. We shall provide a full range
            of Personal Protective Equipment to our Customers serving the needs
            of the Workers in India.
          </p>
          <p className='text-justify'>
            We shall equip the Workers in every part of India exposed to various
            hazards at their working environment, with complete knowledge on
            Personal Safety.
          </p>
        </div>
      </div>
    </div>
   
    <GlobalPresence/>
    <div className="competitive-edge-container">
      <h2>Our Competitive Edge</h2>
      <p className="sub-heading">
        KARAM is constantly striving to improve and have an added advantage over its competitors
      </p>
      <div className="card-container">
        <div className="card">
          <div className="icon">
            <img src={icon1} alt="Customer Focused" />
          </div>
          <h3>Customer Focused</h3>
          <p>
            At KARAM we have the highest levels of customization in our products and services to focus on the customer needs and suit their requirements.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={icon2} alt="Super Quality" />
          </div>
          <h3>Super Quality</h3>
          <p>
            More than 70 percent of the products are manufactured under Six Sigma and are tested and certified to different norms like American, Australian, Canadian, European, Singapore and also Indian Standards.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={icon3} alt="Innovation" />
          </div>
          <h3>Innovation</h3>
          <p>
            A dedicated Research and Development team solely focusing on incremental as well as radical innovation that forms a key source of competitive advantage for KARAM.
          </p>
        </div>
      </div>
    </div>
    <br/>
   <Footer/>
   </>
  )
}

export default Company