import React from 'react'
import img1 from '../component/img/pro1.jpg'
import img2 from '../component/img/pro2.jpg'
import img3 from '../component/img/pro3.jpg'
import img4 from '../component/img/pro4.jpg'
import img5 from '../component/img/pro5.jpg'
import img6 from '../component/img/pro6.jpg'
import img7 from '../component/img/pro7.jpg'
import img8 from '../component/img/pro8.jpg'
import img9 from '../component/img/pro9.jpg'
import img10 from '../component/img/pro10.jpg'
import img11 from '../component/img/pro11.jpeg'
import img12 from '../component/img/pro12.jpg'
import img13 from '../component/img/pro13.jpg'
import img14 from '../component/img/pro14.jpg'
import img15 from '../component/img/pro15.jpg'
import img16 from '../component/img/pro16.jpg'
import img17 from '../component/img/pro17.jpg'
import img18 from '../component/img/pro18.jpg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Products = () => {
  const items1 = [
    { image: img1, title: 'Respiratory Protection', description: "KARAM's disposable face mask meet daily use requirements and are IS, EN and CDSCO" },
    { image: img2, title: 'Gas Detection', description: "KARAM gas detectors give early warnings and safeguard workplaces from hazardous gases" },
    { image: img3, title: 'Head Protection', description: "KARAM's helmets offer comfort, PPE integration, and design for superior head" },
    { image: img4, title: 'Eye Protection', description: "KARAM's safety eyewear range provides superior quality, comfort, and protection. " },
    { image: img5, title: 'Hearing Protection', description: "KARAM's ear muffs and plugs ensure safety, productivity, and comfort with optimal" },
    { image: img6, title: 'Face Protection', description: "KARAM Face and welding shields are designed to provide complete protection during" },
    { image: img7, title: 'Protective Workwear', description: "KARAM's CE-compliant industrial Workwear is designed to keep wearer safe from needless" },
    { image: img8, title: 'Hand Protection', description: "KARAM provides gloves for diverse work conditions, based on style, material, coatings" },
    { image: img9, title: 'Foot Protection', description: "KARAM's footwear offers style, durability, and complete protection, meeting top EN" }
  ];

  const items2 = [
    { image: img10, title: 'Full Body Harnesses', description: "KARAM offers diverse full body harnesses with ergonomic designs and comfort features" },
    { image: img11, title: 'Hooks & Connectors', description: "KARAM provides specialized Hooks and Karabiners for safety in various hazardous" },
    { image: img12, title: 'Lanyards', description: "KARAM’s lanyards are made of twisted or kernmantle rope or webbing as per requirement" },
    { image: img13, title: 'Anchorages', description: "KARAM offers anchorage devices made of steel, metal, and webbing that provide secure" },
    { image: img14, title: 'Temporary Anchorage LS', description: "KARAM's temporary anchorage line systems offer easy installation and portability" },
    { image: img15, title: 'Retractable Fall Arrester Blocks', description: "Retractable blocks by KARAM solve the problem of accessing high anchorage points with" },
    { image: img16, title: 'Confined Space Entry', description: "KARAM offers equipment that simplifies overhead access for retrieving personnel" },
    { image: img17, title: 'Rope Access and Rescue', description: "KARAM offers rope access equipment which is used with a fall protection system " },
    { image: img18, title: 'Self Contained Safety Kits', description: "KARAM provide safety kits for ready use which are also customizable equipment " }
  ];
  return (
    <>
    <Navbar/>
    <div className='row my-5'>
    <h2 className='text-center'>Personal Protective Equipment</h2>
    <br/>
    <p className='text-center'> Protect yourself and your workers with reliable personal protective equipment (PPE)</p>
    </div>
    <div className='ppe-container my-5 '>
    <div className=" col-md-8 ppe-grid mx-auto ">
      {items1.map((item, index) => (
        <div key={index} className="ppe-item mx-auto">
          <div className="ppe-image" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="hover-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="ppe-title">
            <h6>{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
  <br/><br/>
  <div className='row my-5'>
    <h2 className='text-center'>Fall Protection Equipment</h2>
    <br/>
    <p className='text-center'> Prevent workplace falls with our comprehensive fall protection solutions</p>
    </div>
    <div className='ppe-container my-5 '>
    <div className=" col-md-8 ppe-grid mx-auto ">
      {items2.map((item, index) => (
        <div key={index} className="ppe-item mx-auto">
          <div className="ppe-image" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="hover-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="ppe-title">
            <h6>{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
  <br/><br/>
  <Footer/>
  </>
  )
}

export default Products