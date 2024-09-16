import React, { useEffect, useState } from 'react'
import Adsidenav from './Adsidenav'
import logo from "../component/img/logo.png"
import Topnavi from '../component/Topnavi'
import bg1 from '../component/img/bg1.jpg'


const AdminDash = () => {
  const [u,setU] = useState(0);
  var [q,setQ] = useState(0);
  var [pen,setPen] = useState(0);
  var [pro,setPro] = useState(0);
  var [com,setCom] = useState(0);

  const total = async() => {
   const uresponse = await fetch("http://localhost:8000");
   const ures = await uresponse.json();
   setU(ures.length);
   const qresponse = await fetch("http://localhost:8000/getquery");
   const qres = await qresponse.json();
   setQ(qres.length);
   const penresponse= await fetch("http://localhost:8000/ad/allpenquery");
   const penres=await penresponse.json();
   setPen(penres.q.length)
   const proresponse= await fetch("http://localhost:8000/ad/allproquery");
   const prores=await proresponse.json();
   setPro(prores.q.length)
   const comresponse= await fetch("http://localhost:8000/ad/allcomquery");
   const comres=await comresponse.json();
   setCom(comres.q.length)
  }

  useEffect(() => {
    total();
  },[]);
  return (
    <>
   <div className="row vh-7">
    <div className="col-sm-4 pt-2 bg-dark text-light">
    <img src={logo} alt="No icon found" height={35} />
    </div>
    <div className="col-sm-8 pt-2 bg-dark text-light">
    <Topnavi/>
    </div>
   </div>
   <div className="row vh-93 ">
    <div className="col-2 h-100 scroll bg-primary">
      <Adsidenav/>
    </div>
    <div className="col-10 h-100 scroll bg-secondary">
      <div className="row h-100" style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className="col-md-11 mx-auto my-auto">
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col mx-auto">
    <div className="card h-100 border border-5 border-primary">
      
      <div className="card-body ">
        <h5 className="card-title">Total Users</h5>
        <p className="card-text">{u}</p>
      </div>
    </div>
  </div>
  <div className="col mx-auto">
    <div className="card h-100 border border-5 border-primary">
      
      <div className="card-body">
        <h5 className="card-title">Total Queries</h5>
        <p className="card-text">{q}</p>
      </div>
    </div>
  </div>
  <div className="col mx-auto">
    <div className="card h-100 border border-5 border-primary">
     
      <div className="card-body">
        <h5 className="card-title">Total Pending Queries</h5>
        <p className="card-text">{pen}</p>
      </div>
    </div>
  </div>
 <div className="col mx-auto"> 
    <div className="card h-100 border border-3 border-primary">
      
      <div className="card-body">
        <h5 className="card-title">Total Processing Queries</h5>
        <p className="card-text">{pro}</p>
      </div>
    </div>
  </div>
  <div className="col mx-auto"> 
    <div className="card h-100 border border-2 border-primary">
      
      <div className="card-body">
        <h5 className="card-title">Total Completed Queries</h5>
        <p className="card-text">{com}</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default AdminDash