import React, { useState } from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import bg1 from '../component/img/bg1.jpg'

const Adlogin = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    const logcode = async(e) => {
        e.preventDefault();
        const user ={username,email,password};
        const response = await fetch('http://localhost:8000/adlogin',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
           });
    
            const data= await response.json();
            if(data.msg  === "Admin Login Success"){
                alert(data.msg)
                setUsername("");
                setEmail("");
                setPassword("");
                navigate("/admindash");
            }
            else{
                alert(data.msg)
            }
    }
  return (
    <>
    <Navbar />
    <div className="row" style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
    <div className="col-md-6 mx-auto">
    <form className='my-5 p-5 shadow-lg rounded-5 bg-secondary border border-primary border-5' onSubmit={logcode} >
            <h4 className='mb-3 text-center'><u className='text-primary'><b>Admin Login</b> </u> <b>Form</b></h4>
                <b>Enter Username:</b>
                <input className='form-control border-2 border-primary' value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username'/>
                <br/>
                <b>Enter Your Email:</b>
                <input className='form-control border-2 border-primary' value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email'/>
                <br/>
                <b>Enter Your Password:</b>
                <input className='form-control border-2 border-primary' type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
                <br/>
                <button className='form-control btn btn-primary mb-3' type="submit"> <b>Submit</b></button>
            </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Adlogin