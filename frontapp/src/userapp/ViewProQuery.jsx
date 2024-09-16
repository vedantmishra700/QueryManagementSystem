import React, { useEffect, useState } from 'react'
import logo from '../component/img/logo.png';
import Sidenav from '../component/Sidenav';
import { useParams } from 'react-router-dom';
import UTopNav from '../component/UTopNav';
import bg1 from '../component/img/bg1.jpg'

const ViewProQuery = () => {
  const {id} = useParams();
  const [proquery,setProquery] = useState([]);
  var [count,setCount]=useState(1);
  
  const getproquery = async() => {
    const response = await fetch(`http://localhost:8000/getproquery/${id}`);
    const data= await response.json();
    if(data.msg==="Success")
    {
        setProquery(data.result);
    }    
}

useEffect(() => {
    getproquery();
},[])
  return (
    <>
   <div className="row vh-7">
   <div className="col-sm-4 pt-2 bg-dark ">
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
       <div className="col-md-6 table-responsive mx-auto my-auto p-2 rounded shadow-lg bg-light border border-5 border-danger">
        <table className='table table-danger '>
            <thead>
                <tr>
                    <th> S. no.</th>
                    <th> Department</th>
                    <th> Subject</th>
                    <th> Query </th>
                    <th> Status </th>
                </tr>
            </thead>
            <tbody>
            {proquery?.map((e) => (
                    
                    <tr>
                        <td> {count++}</td>
                        <td>{e.department}</td>
                        <td>{e.subject}</td>
                        <td>{e.description}</td>
                        <td> Processing </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
       </div>
       </div>
     </div>
    </div>
    
    </>
  )
}

export default ViewProQuery