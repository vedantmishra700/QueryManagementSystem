import React, { useEffect, useState } from 'react'
import logo from '../component/img/logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';

const EditDash = () => {
    const {id} = useParams();
    const [firstname,setFirstname] =useState("");
    const [lastname,setLastname] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const getUser = async() => {
        const response = await fetch(`http://localhost:8000/${id}`);
        if(response.ok)
        {
          const data = await response.json();
          setFirstname(data.firstname);
          setLastname(data.lastname);
          setEmail(data.email);
          setPassword(data.password);
        }}

        const updateuser = async (e)=>{
              e.preventDefault();
              const u ={firstname,lastname,email,password};
              const response = await fetch(`http://localhost:8000/editDash/${id}`,{
                method:'PATCH',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(u)
              });

              const result= await response.json()

              if(result.msg === "Success")
              {
                alert(" Updated ")
                navigate(`/Dash/${id}`)
              }
              else{
                alert(result.msg);
              }
        }
  
       useEffect(() => {
        getUser()
       },[]);
  return (
    <>
   <div className="row vh-7">
     <div className="col-sm-12 pt-2 bg-dark ">
     <img src={logo} alt="No icon found" height={35} />
     </div>
    </div>
    <div className="row vh-93 ">
     <div className="col-2 h-100 scroll bg-primary">
       <Sidenav/>
     </div>
     <div className="col-10 h-100 scroll bg-secondary">
       <div className="row h-100">
       <div className="col-md-6 mx-auto my-auto rounded-5 shadow-lg bg-white">
       <form className='my-2 p-3 shadow-lg rounded-5' onSubmit={updateuser}>
            <h4 className='mb-3'><u className='text-danger'> Updation </u> form</h4>
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
                <button className='form-control btn btn-primary mb-3' type="submit"> Update</button>
            </form>
       </div>
       </div>
     </div>
    </div>
    
    </>
  )
}

export default EditDash