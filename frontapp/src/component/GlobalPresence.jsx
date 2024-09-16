import React from 'react'
import { Row, Col } from 'react-bootstrap';
import g1 from "../component/img/globalimg.png"
import g2 from "../component/img/globalimg2.jpg"

const GlobalPresence = () => {
  return (
    <div className="global-presence bg-light pt-5">
     
        <Row>
          <Col className="text-center">
            <h2>Global Presence</h2>
            <p>Expanding our reach: Providing products and services to customers worldwide</p>
            <img src={g1} alt="Global Presence"   style={{width:'100%'}}/>
            
          </Col>
        </Row>
      
    </div>
  )
}

export default GlobalPresence