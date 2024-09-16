import React from 'react'
import { Link } from 'react-router-dom'

const Topnavi = () => {
  return (
    <>
    <div className="row">
        <div className="col-2 my-auto mx-auto">
            <h4 className='text-primary'> Admin Zone </h4>
        </div>
        <div className="col-2 my-auto ms-auto">
            <h6 className='text-primary'><Link to={"/adlogin"} className='nav-link'><i className='fa-solid fa-right-from-bracket'></i> Logout</Link></h6>
        </div>

    </div>
    </>
  )
}

export default Topnavi