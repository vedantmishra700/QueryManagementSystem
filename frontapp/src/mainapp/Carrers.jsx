import React ,{Component, useState} from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import vid from '../component/img/karam-career.mp4'
import car1 from '../component/img/car1.jpg'
import car2 from '../component/img/car2.jpg'
import car3 from '../component/img/car3.jpg'
import car4 from '../component/img/car4.jpg'
import car5 from '../component/img/car5.jpg'
import car6 from '../component/img/car6.jpg'
import g2 from "../component/img/globalimg2.jpg"

const Carrers  = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[contact ,setContact] = useState("");
  const[ qualification,setQualification] = useState("");
  const[ location,setLocation] = useState("");
  const[experience ,setExperience] = useState("");
  const[ salary,setSalary] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
   const data={name,email,contact,qualification,location,experience,salary};
   const response = await fetch('http://localhost:8000/career',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
   });

   const result = await response.json();
   if(result.msg === "Success")
   {
     alert("Application Successful");
     setName("")
     setEmail("");
     setContact("");
     setQualification("")
     setLocation("");
     setExperience("")
     setSalary("")
   }
   else{
    alert("Something went wrong");
   }
  };

  return (
   
    <>
    <Navbar />
    
    <div className="row mt-5 mb-3">
      <h2 className='text-center text-danger'><b>Careers</b></h2>
    </div>
    <div className="row">
        <div className="col-md-4 mx-auto my-5">
            <h1 className='text-center'> Why Join Us ?</h1>
            <br/>
            <p className='text-justify'>
            KARAM was founded with the ideal of saving lives. We are committed towards safety at work and we invite like-minded individuals to join us in our journey towards positively impacting the world through our efforts.
            </p>
            <p className='text-justify'>Join our team of 4000+ dedicated professionals on a mission to enhance occupational safety.</p>
        </div>
        <div className="col-md-4 me-auto ms-50">
            <video  src={vid} autoPlay='true'  width="500" height="300" controls="controls"/>
        </div>
    </div>
    <div className="row mt-3" style={{backgroundColor:"#f2f2f2",textAlign:"center"}}>
      <div className="col-md-8 text-center p-5 mx-auto">
        <h3 className='text-center text-secondary'><b>Culture at KARAM</b></h3>
        <br/>
        <p className='text-center'>KARAM provides a fulfilling work environment where employees can make a difference</p>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <img src={car1} className="d-block w-30" alt="Slide 1" />
            <img src={car2} className="d-block w-30" alt="Slide 2" />
            <img src={car3} className="d-block w-30" alt="Slide 3" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <img src={car4} className="d-block w-30" alt="Slide 4" />
            <img src={car5} className="d-block w-30" alt="Slide 5" />
            <img src={car6} className="d-block w-30" alt="Slide 6" />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon custom-control" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon custom-control" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    </div>
    <div className="row">
      <img src={g2} alt="No"/>
    </div>
    <br/><br/><br/>
    <div className="row my-5">
      <div className="col-md-6 mx-auto">
        <h3 className='text-center'>Career interest submission form</h3>
        <br/>
        <p className='text-center '>Drop in your details to take the first step towards an exciting career</p>
        <form 
      className='my-5 p-5 shadow-lg bg-light border border-danger border-1 rounded-5' // Added styling classes
      onSubmit={handleSubmit}
      style={{ maxWidth: '600px', margin: '0 auto' }} // Centers the form and limits width
    >
      <h2 className='mb-3 text-center'>
        <u className='text-danger'>
          <b>Career</b>
        </u>{' '}
        <b>Form</b>
      </h2>
      <div className='mb-3'>
        <b>Candidate Name:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='name'
          placeholder="Enter your name" // Placeholder to guide the user
        />
      </div>

      <div className='mb-3'>
        <b>Email:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          placeholder="Enter your email"
        />
      </div>

      <div className='mb-3'>
        <b>Contact Number:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          type='text'
          name='contact'
          placeholder="Enter your contact number"
        />
      </div>

      <div className='mb-3'>
        <b>Highest Qualification:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          type='text'
          name='qualification'
          placeholder="Enter your qualification"
        />
      </div>

      <div className='mb-3'>
        <b>Current Location:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type='text'
          name='location'
          placeholder="Enter your location"
        />
      </div>

      <div className='mb-3'>
        <b>Experience:</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          type='text'
          name='experience'
          placeholder="Enter your experience"
        />
      </div>

      <div className='mb-3'>
        <b>Expected Salary (CTC):</b>
        <input
          className='form-control shadow-sm border-1 border-danger'
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type='text'
          name='salary'
          placeholder="Enter expected salary"
        />
      </div>

      <button className='form-control btn btn-danger shadow-sm' type='submit'>
        <b>Apply Now</b>
      </button>
    </form>
      </div>
    </div>
   
   <Footer/>
   </>
  )
}


export default Carrers