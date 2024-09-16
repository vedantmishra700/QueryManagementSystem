import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contactus = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message ,setMessage] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
   const data={name,email,message};
   const response = await fetch('http://localhost:8000/contact',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
   });

   const result = await response.json();
   if(result.msg === "Success")
   {
     alert("Message Sent Successfully");
     setName("")
     setEmail("");
     setMessage("")
   }
   else{
    alert("Something went wrong");
   }
  };

  return (

    <>
    <Navbar/>
    <div
        className=' row text-light bg-danger text-center py-5'
      >
       
          <h1 className='display-4 fw-bold'>Contact Us</h1>
          <p className='lead'>We are here to assist you. Reach out to us anytime!</p>
      
      </div>

      {/* Contact Information Section */}
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-6 mb-4'>
              <div className='bg-white p-4 shadow rounded'>
                <i className="fa fa-phone-square display-4 text-danger"></i>
                <h4 className='mt-3'>Toll-Free Number</h4>
                <p className='lead'>1800 103 7085</p>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='bg-white p-4 shadow rounded'>
                <i className="fa fa-envelope display-4 text-danger"></i>
                <h4 className='mt-3'>Email</h4>
                <p className='lead'>karam@karam.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='bg-white p-5 shadow-lg rounded-5 border border-danger'>
                <h2 className='text-center mb-4 text-danger'>
                  <u>Get in Touch</u>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label className='form-label'>Your Name</label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='form-control shadow-sm border-2 border-danger'
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Your Email</label>
                    <input
                      type='email'
                      value={email}
                       onChange={(e) => setEmail(e.target.value)}
                      className='form-control shadow-sm border-2 border-danger'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Your Message</label>
                    <textarea
                      className='form-control shadow-sm border-2 border-danger'
                      rows='5'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder='Enter your message'
                    ></textarea>
                  </div>
                  <button type='submit' className='btn btn-danger btn-block shadow-sm' >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='text-center mb-4 text-danger'><u>Our Location</u></h2>
              <div className='rounded-5 shadow-lg overflow-hidden'>
                <iframe
                  title="Karam Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.211070840674!2d77.31269397829943!3d28.586673208142675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45466b20643%3A0x8b5e29774ad63721!2sD-95%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694608942980!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  )
}

export default Contactus