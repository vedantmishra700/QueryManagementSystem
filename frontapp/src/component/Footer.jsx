import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="row bg-black text-white py-4 mt-auto">
        <div className="row mx-auto">
          <div className=" col-md-3 mb-4 ms-auto me-auto">
            <img src="https://i.ibb.co/CB4YSqj/logo.png" alt="Karam Logo" className="mb-3" />
            <br/> <br/>
            <p className="mb-2"><FaMapMarkerAlt className="me-2 mb-2" />D-95, Sector 2, Noida, Uttar Pradesh - 201301</p>
           
            <p className="mb-2"><FaEnvelope className="me-2 mb-2" /><a href="mailto:karam@karam.in" className="text-white">karam@karam.in</a></p>
           
            <p className="mb-2"><FaPhoneAlt className="me-2 mb-2" />1800-103-7085</p>
            
            <p className="mb-2"><FaPhoneAlt className="me-2 mb-2" />+91 120 4734400</p>
          </div>

          <div className="col-md-2 my-auto">
    
            <ul className="list-unstyled">
              <li><FaChevronRight className="me-2" /><a href="#faq" className="text-white mb-2" style={{textDecoration:'none'}}>FAQs</a></li>
              <li><FaChevronRight className="me-2" /><a href="#blogs" className="text-white mb-2" style={{textDecoration:'none'}}>Blogs</a></li>
              <li><FaChevronRight className="me-2" /><a href="#newsletter" className="text-white mb-2" style={{textDecoration:'none'}}>Newsletter</a></li>
              <li><FaChevronRight className="me-2" /><a href="#news-events" className="text-white mb-2"style={{textDecoration:'none'}}>News & Events</a></li>
            </ul>
          </div>

          <div className="col-md-3 my-auto">
            
            <ul className="list-unstyled">
              <li><FaChevronRight className="me-2" /><a href="#corporate-affairs" className="text-white mb-2" style={{textDecoration:'none'}}>Corporate Affairs</a></li>
              <li><FaChevronRight className="me-2" /><a href="#product-warranty" className="text-white mb-2" style={{textDecoration:'none'}}>Product Warranty & Disclaimer</a></li>
              <li><FaChevronRight className="me-2" /><a href="#eu-declaration" className="text-white mb-2" style={{textDecoration:'none'}}>EU Declaration Form</a></li>
              <li><FaChevronRight className="me-2" /><a href="#loyalty-rewards" className="text-white mb-2" style={{textDecoration:'none'}}>Loyalty Rewards Program</a></li>
              <li><FaChevronRight className="me-2" /><a href="#ims-policy" className="text-white mb-2" style={{textDecoration:'none'}}>IMS Policy</a></li>
              <li><FaChevronRight className="me-2" /><a href="#quality-policy" className="text-white mb-2" style={{textDecoration:'none'}}>Quality Policy</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 ms-2 ">
            <img src="https://i.ibb.co/56j1Ft3/25-year-footer-01.png" alt="Celebrating 25 Years" className="mb-3" style={{ maxWidth: '150px' }} />
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-12">
            <p className="mb-0">&copy; 2024, All rights reserved by KARAM Safety Pvt. Ltd.</p>
            <br/>
            <p className="mb-0"><a href="#privacy-policy" className="text-white" style={{textDecoration:'none'}}>Privacy Policy</a> | <a href="#terms-conditions" className="text-white" style={{textDecoration:'none'}}>Terms & Conditions</a></p>
            <div className="social-icons mt-3">
              <a href='https://www.facebook.com/KARAMsafetyproducts' className="text-white me-3"><i className='fa-brands fs-4 fa-facebook border p-1 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i></a>
              <a href='https://x.com/karam_india' className="text-white me-3"><i className='fa-brands fs-4 fa-twitter border p-1 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i></a>
              <a href='https://www.linkedin.com/company/karam' className="text-white me-3"><i className='fa-brands fs-4 fa-linkedin border p-1 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i></a>
              <a href='https://www.youtube.com/channel/UCaqIglxwt9USY0j-7bZomjQ' className="text-white me-3"><i className='fa-brands fs-4 fa-youtube border p-1 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i></a>
              <a href='https://www.instagram.com/karam_safety/' className="text-white"><i className='fa-brands fs-4 fa-instagram border p-1 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i></a>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
