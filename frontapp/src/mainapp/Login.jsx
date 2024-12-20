import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom';
import bg1 from '../component/img/bg1.jpg'

const Login = () => {
     const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const logcode = async(e) => {
        e.preventDefault();
        const user ={email,password};
        const response = await fetch('http://localhost:8000/login',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
           });
    
            const data= await response.json();
            if(data.msg  === "Login Success"){
                alert("Login Success")
                setEmail("");
                setPassword("");
                navigate(`/Dash/${data.id}`);
            }
            else{
                alert(data.msg)
            }
    }
  return (
    <>
    <Navbar />
    <div className="row " style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
    <div className="col-md-6 mx-auto">
    <form className='my-5 p-5 shadow-lg rounded-5 bg-secondary border border-danger border-5'  onSubmit={logcode}>
            <h2 className='mb-3 text-center'><u className='text-danger '> <b>Login</b> </u> <b>form</b></h2>
               
                <b>Enter Your Email:</b>
                <input className='form-control border-2 border-danger' value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email'/>
                <br/>
                <b>Enter Your Password:</b>
                <input className='form-control border-2 border-danger' type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
                <br/>
                <button className='form-control btn btn-danger mb-3' type="submit"> <b>Submit</b></button>

                <Link to={'/registration'} className='me-5 pe-5 text-warning'> <b>Create New Account</b> </Link>
                
            </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login