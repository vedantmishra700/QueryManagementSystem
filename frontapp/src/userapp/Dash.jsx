import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../component/img/logo.png';
import Sidenav from '../component/Sidenav';
import UTopNav from '../component/UTopNav';
import bg1 from '../component/img/bg1.jpg'

const Dash = () => {
     const {id} = useParams();
     
     const [firstname, setFirstname]=useState("");
     const [lastname,setLastname] = useState("");
     const [email,setEmail]=useState("");
     const getUser = async() => {
      const response = await fetch(`http://localhost:8000/${id}`);
      if(response.ok)
      {
        const data = await response.json();
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
      }}

     useEffect(() => {
      getUser()
     },[]);
    
  return (
   <>
   <div className="row vh-7">
    <div className="col-sm-4 pt-2 bg-dark text-light">
    <img src={logo} alt="No icon found" height={35} />
    </div>
    <div className="col-sm-8 pt-2 bg-dark text-light">
      <UTopNav/>
    </div>
   </div>
   <div className="row vh-93 ">
    <div className="col-2 h-100 scroll bg-danger">
      <Sidenav/>
    </div>
    <div className="col-10 h-100 scroll" >
      <div className="row h-100 "  style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className="col-md-6 mx-auto bg-light p-4 rounded-5 my-auto border border-5 border-danger">
          <h5 className='text-center'> <b> User Details </b></h5>
          <div className="row my-3">
            <div className="col-md-2"> Firstname :</div>
            <div className="col-md-6">{firstname}</div>
          </div>
          <div className="row my-3">
            <div className="col-md-2"> Lastname :</div>
            <div className="col-md-6">{lastname}</div>
          </div>
          <div className="row my-3">
            <div className="col-md-2"> Email :</div>
            <div className="col-md-6">{email}</div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 mx-auto text-center">
            <Link to={`/editDash/${id}`} className='btn btn-danger'> Edit </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Dash