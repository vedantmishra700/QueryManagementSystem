import React from 'react'
import { Link } from 'react-router-dom'


const Adsidenav = () => {
  return (
    <div className="row pt-5">
        <div className="col-sm-12 text-light">
            <Link  className='nav-link my-3 ps-5 pt-5' to={`/admindash`}><i className='fa fa-book'></i> <b>Dashboard </b></Link>
            <Link  className='nav-link my-3 ps-5 pt-3' to={`/viewalluser`}><i className='fa fa-user'></i> <b>View All Users</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3' to={`/viewallpenquery`}><i className='fa fa-eye'></i> <b>View Pending Query</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3' to={`/viewallproquery`}><i className='fa fa-eye'></i> <b>View Processing Query</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3' to={`/viewallcomquery`}><i className='fa fa-eye'></i> <b>View Completed Query  </b></Link>
        </div>
    </div>
  )
}

export default Adsidenav