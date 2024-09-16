import React from 'react'
import {Button} from 'react-bootstrap'
import s1 from './img/slide1.jpg'
import s2 from './img/slide2.jpg'
import s3 from './img/slide3.jpg'
import s4 from './img/slide4.jpg'
import s5 from './img/slide5.jpg'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className="row bg-black text-light ps-5 pt-5 ">
        <div className="col-sm-5">
        <h1 ><b> Saving </b>  </h1>
            <h1 ><b> millions of </b>  </h1>
            <h1 ><b> lives globally  </b>  </h1>
             <br/>
            <p>KARAM is a leading global PPE & Fall Protection solutions brand.</p>
            <Button variant="danger" className="mb-3" href="/contactus" style={{ width: '150px',height:'40px', padding: '5px 20px', borderRadius:'100px' }}>Learn More</Button>
            <br/><br/>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <Button variant="danger" href="/products" style={{ width: '200px', padding: '10px 10px' }}><img src='https://i.ibb.co/n3CCd2n/strip-line.png' alt='NO' height={50} style={{paddingRight:"5px"}}/><b>Karam Online Product</b></Button>
              <Button variant="secondary" href="/carrers" style={{ width: '200px', padding: '10px 10px' }}><img src='https://i.ibb.co/n3CCd2n/strip-line.png' alt='NO' height={50} style={{paddingRight:"5px"}}/><b>News & Events</b></Button>
            </div>
        </div>
        <div className="col-sm-6">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={s1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={s2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={s3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={s4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={s5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="col-sm-1 my-auto">
          <Link to={'https://www.facebook.com/KARAMsafetyproducts'}><i className='fa-brands fs-4 fa-facebook border p-2 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i><br/><br/></Link>
            <Link to={'https://x.com/karam_india'}><i className='fa-brands fs-4 fa-twitter border p-2 rounded-circle'style={{color:'red', backgroundColor:'white'}}></i><br/><br/></Link>
            <Link to={'https://www.linkedin.com/company/karam'}><i className='fa-brands fs-4 fa-linkedin border p-2 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i> <br/><br/></Link>
            <Link to={'https://www.youtube.com/channel/UCaqIglxwt9USY0j-7bZomjQ'}><i className='fa-brands fs-4 fa-youtube border p-2 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i> <br/><br/></Link>
            <Link to={'https://www.instagram.com/karam_safety/'}><i className='fa-brands fs-4 fa-instagram border p-2 rounded-circle' style={{color:'red', backgroundColor:'white'}}></i> <br/><br/></Link>
            
        </div>
    </div>
  )
}

export default Slider