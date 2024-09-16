import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const BelowSlider = () => {
  return (
    <div>
    
    <div className="region-section" style={{ backgroundColor: '#f7f7f7', padding: '20px 0' }}>
      <Container>
        <Row className="text-center align-items-center justify-content-center">
          <Col xs={12} md={4}>
            <img src="https://i.ibb.co/QNvrDsf/karam-afrika-1.png" alt="KARAM AFRICA" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://i.ibb.co/m4BfYs2/karam-millde-east-1.png" alt="KARAM MIDDLE EAST" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://i.ibb.co/2341sYm/karam-logo-6.png" alt="KARAM INDIA" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}

export default BelowSlider