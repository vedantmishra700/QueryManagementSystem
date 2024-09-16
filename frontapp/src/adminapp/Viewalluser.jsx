import React, { useEffect, useState } from 'react'
import logo from "../component/img/logo.png";
import Adsidenav from './Adsidenav'
import Topnavi from '../component/Topnavi';
import bg1 from '../component/img/bg1.jpg'

const Viewalluser = () => {

  const [user,setUser] = useState([]);
  var [count,setCount]=useState(1);

  const getUser = async()=>{
         const response = await fetch('http://localhost:8000');
         const data = await response.json();
         if(data)
         {
          setUser(data);
         }
 }  
  useEffect(() => {
    getUser();
  },[])
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
       <div className="col-md-6 table-responsive mx-auto my-auto p-2 rounded shadow-lg bg-light border border-5 border-primary">
        <table className='table table-primary '>
            <thead>
                <tr>
                    <th> S. no.</th>
                    <th> Firstname</th>
                    <th> Lastname</th>
                    <th> Email </th>
                    
                </tr>
            </thead>
            <tbody>
                {user?.map((e) => (
                    
                    <tr>
                        <td> {count++}</td>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.email}</td>
                        
                      
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

export default Viewalluser