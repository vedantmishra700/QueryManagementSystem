import React from 'react'
import { Link } from 'react-router-dom'

const UTopNav = () => {
  return (
    <>
    <div className="row">
        <div className="col-2 my-auto mx-auto">
            <h4 className='text-danger'> User Zone </h4>
        </div>
        <div className="col-2 my-auto ms-auto">
            <h6 className='text-danger'><Link to={"/login"} className='nav-link'><i className='fa-solid fa-right-from-bracket'></i> Logout</Link></h6>
        </div>

    </div>
    </>
  )
}

export default UTopNav