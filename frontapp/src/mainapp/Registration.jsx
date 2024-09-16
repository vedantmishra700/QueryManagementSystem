import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom';
import bg1 from '../component/img/bg1.jpg'


const Registration = () => {
    const navigate = useNavigate();
    const [firstname,setFirstname] =useState("");
    const [lastname,setLastname] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const regcode =async (e) => {
        e.preventDefault();
       const emp ={ firstname,lastname,email,password};
       const response = await fetch('http://localhost:8000/',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(emp)
       });

       const result = await response.json();
       if(result.msg === "Success")
       {
         alert("Registration Success");
         setFirstname("");
         setLastname("");
         setEmail("");
         setPassword("");
         navigate('/login');
       }
       else{
        alert("Something went wrong");
       }
  }
  return (
    <>
    <Navbar/>
    <div className="row"  style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className="col-md-6 mx-auto">
        <form className='my-5 p-5 shadow-lg rounded-5 bg-secondary' onSubmit={regcode}>
            <h2 className='mb-3 text-center'><u className='text-danger'> Registration </u> form</h2>
                Enter Your First name:
                <input className='form-control' value={firstname} onChange={(e) => setFirstname(e.target.value) } type='text' name='firstname'/>
                <br/>
                Enter Your Last name:
                <input className='form-control' value={lastname} onChange={(e) => setLastname(e.target.value)} type='text' name='lastname'/>
                <br/>
                Enter Your Email:
                <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email'/>
                <br/>
                Enter Your Password:
                <input className='form-control' type='text' value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
                <br/>
                <button className='form-control btn btn-primary mb-3' type="submit"> Submit</button>

                <Link to={'/login'} className='text-warning'> Already have Account ?</Link>
            </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Registration