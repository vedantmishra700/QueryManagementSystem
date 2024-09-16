import React, { useEffect, useState } from 'react'
import logo from '../component/img/logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';

const EditPenQuery = () => {
    const {id} = useParams();
    
    const[qid,setQid]=useState("");
  const [department,setDepartment] = useState("");
  const [subject,setSubject] = useState("");
  const [description,setDescription] = useState("");
  const navigate=useNavigate();
   
   
  const getquery =async () =>{
    const response = await fetch(`http://localhost:8000/getpenquery/${id}`);
    if(response.ok)
    {
       const data=await response.json();
       setQid(data.result[0]._id);
       setDepartment(data.result[0].department);
       setSubject(data.result[0].subject);
       setDescription(data.result[0].description);
       
    }
 }



  const updatequery = async(e) => {
    e.preventDefault();
    const query = { "department" :department , "subject" : subject, "description" :description}
    const response = await fetch(`http://localhost:8000/editQuery/${qid}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(query)
    });
    const data= await response.json();
    if(data.msg === "Success")
    {
       alert("Query Updated");
       navigate(`/viewPenQuery/${id}`); 
    }
    else{
      alert("Something Went Wrong");
    }
}

useEffect(() => {
    getquery();
  },[]);



  return (
    <>
    <div className="row vh-7">
     <div className="col-sm-12 pt-2 bg-dark">
     <img src={logo} alt="No icon found" height={35} />
     </div>
    </div>
    <div className="row vh-93 ">
     <div className="col-2 h-100 scroll bg-primary">
       <Sidenav/>
     </div>
     <div className="col-10 h-100 scroll bg-secondary">
       <div className="row h-100">
       <div className="col-md-6 mx-auto">
        <form onSubmit = {updatequery} className='mt-5 p-5 bg-light rounded-5 shadow-lg'>
          <h4 className='text-center mb-4'> Update Query</h4>
            Select Department
            <select className='form-control' value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value='1'> Select Department</option>
              <option value={"IT"}>IT</option>
              <option value={"Accounts"}>Accounts</option>
              <option value={"Management"}>Management</option>
              <option value={"Sales"}>Sales</option>
            </select>
            Enter Your Subject
            <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} className='form-control' placeholder='Enter Your Subject'/>
            Describe in Detail
            <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} rows='5' placeholder='Describe in Detail'></textarea>
            <br/><br/>
            <input  type='submit' value={'Update Query'} className='form-control btn btn-primary'/>
        </form>
       </div>
       </div>
     </div>
    </div>
    </>
  )
  
}

export default EditPenQuery