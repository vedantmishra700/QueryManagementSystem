import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import imgg1 from '../component/img/about-overview-08.jpg'
import Slider from '../component/Slider'
import BelowSlider from '../component/BelowSlider'
import Aboutus from '../component/Aboutus'
import OurServices from '../component/OurServices'
import GlobalPresence from '../component/GlobalPresence'
import ESG from '../component/ESG'

const Home = () => {
  return (
    <>
    <Navbar />
    <Slider />
    <BelowSlider/>
    <Aboutus/>
    <OurServices/>
    <GlobalPresence/>
    <ESG/>
    <Footer/>
    </>
  )
}

export default Home