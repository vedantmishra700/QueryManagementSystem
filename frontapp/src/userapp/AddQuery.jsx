import React, { useState } from 'react'
import logo from '../component/img/logo.png';
import Sidenav from '../component/Sidenav'
import { useParams } from 'react-router-dom'
import UTopNav from '../component/UTopNav';
import bg1 from '../component/img/bg1.jpg'

const AddQuery = () => {
  const {id} = useParams();
  const [department,setDepartment] = useState("");
  const [subject,setSubject] = useState("");
  const [description,setDescription] = useState("");

  const addquery = async(e) => {
          e.preventDefault();
          const status = "pen"
          const query = {"uid":id , "department" :department , "subject" : subject, "description" :description, "status":status}
          const response = await fetch('http://localhost:8000/addquery',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify(query)
          });
          const data= await response.json();
          if(data.msg === "Query Added")
          {
             alert("Query Added");
             setDepartment("");
             setSubject("");
             setDescription("");
          }
          else{
            alert("Something Went Wrong");
          }
  }
  return (
    <>
    <div className="row vh-7">
     <div className="col-sm-4 pt-2 bg-dark">
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
     <div className="col-10 h-100 scroll">
       <div className="row h-100 " style={{
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <div className="col-md-6 mx-auto">
        <form onSubmit = {addquery} className='mt-5 p-4 bg-secondary rounded-5 shadow-lg border border-5 border-danger'>
          <h3 className='text-center mb-4'> <b> Add Query</b></h3>
            <b>Select Department</b>
            <select className='form-control border-2 border-danger' value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value='1'> Select Department</option>
              <option value={"IT"}>IT</option>
              <option value={"Accounts"}>Accounts</option>
              <option value={"Management"}>Management</option>
              <option value={"Sales"}>Sales</option>
            </select>
            <br/>
            <b>Enter Your Subject</b>
            <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} className='form-control border-2 border-danger' placeholder='Enter Your Subject'/>
            <br/>
            <b>Describe in Detail</b>
            <textarea className='form-control border-2 border-danger' value={description} onChange={(e) => setDescription(e.target.value)} rows='5' placeholder='Describe in Detail'></textarea>
            <br/><br/>
            <input  type='submit' value={'Add Query'} className='form-control btn btn-danger'/>
        </form>
       </div>
       </div>
     </div>
    </div>
    </>
  )
}

export default AddQuery