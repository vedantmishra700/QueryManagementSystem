import React, { useState } from 'react'
import logo1 from './img/logo1.png'
import { Link } from 'react-router-dom'
import {Nav,Form, FormControl,Button} from 'react-bootstrap'

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="row bg-black text-light">
        <div className="col-md-12">
        <nav class="navbar navbar-expand-lg bg-black navbar-light text-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={logo1} alt="No icon found"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto w-75 ">
        <li class="nav-item ">
          <Link class="nav-link active text-light"  style={{paddingRight:'50px' , paddingLeft:'50px'}} aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light"  style={{paddingRight:'50px'}} to={'/company'}>Company</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light" style={{paddingRight:'50px'}} to={'/products'}>Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light" style={{paddingRight:'50px'}} to={'/carrers'}>Careers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light" style={{paddingRight:'50px'}} to={'/contactus'}>Contact Us</Link>
        </li>
        <li class="nav-item my-auto">
        <Nav.Link onClick={handleSearchClick} style={{ cursor: 'pointer', color:'white', padding:"0 22px"}}>
            <i class="fa fa-search" aria-hidden="true"></i>
            </Nav.Link>
            </li>
          {showSearch && (
            <Form inline style={{marginRight:'10px', marginBottom:'5px'}}>
              <FormControl type="text" placeholder="Search" style={{marginRight:'10px', marginBottom:'10px'}}/>
            </Form>
          )}
      
      </ul>
      <Link  to={'/adlogin'}className='btn btn-outline-danger text-light me-2'>Admin</Link>
      <Link  to={'/login'}className='btn btn-outline-danger text-light'>Query</Link>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Navbar