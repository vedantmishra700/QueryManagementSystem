import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
    const {id}=useParams();
  return (
    <div className="row pt-5">
        <div className="col-sm-12 text-light">
            <Link  className='nav-link my-3 ps-5 pt-5 ' to={`/Dash/${id}`}><i className='fa fa-book'></i><b> Dashboard </b> </Link>
            <Link  className='nav-link my-3 ps-5 pt-3 ' to={`/addQuery/${id}`}><i className='fa fa-question'></i> <b>Add Query</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3 ' to={`/viewPenQuery/${id}`}><i className='fa fa-eye'></i> <b>View Pending Query</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3 ' to={`/viewProQuery/${id}`}><i className='fa fa-eye'></i> <b>View Processing Query</b> </Link>
            <Link  className='nav-link my-3 ps-4 pt-3 ' to={`/viewComQuery/${id}`}><i className='fa fa-eye'></i> <b>View Completed Query</b> </Link>
        </div>
    </div>
  )
}

export default Sidenav