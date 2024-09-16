import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Aboutus = () => {
  return (
    <div style={{ padding: '100px 0', backgroundColor: '#fff' }}>
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img src="https://i.ibb.co/Hh4b6GC/about-overview-08.jpg" alt="About Us " style={{ width: '90%',height:'450px', borderRadius: '5px' }} />
        </Col>
        <Col md={6}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>About Us</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and exporting our safety solutions to over 100 nations.
          </p>
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions, and fixed-line systems.
          </p>
          <p style={{ marginBottom: '40px', lineHeight: '1.6' }}>
            We are also a CRISIL A/Stable/CRISIL A1 rated company which reflects the robust market position of the entire KARAM Group.
          </p>
          <Button href="/company" style={{
            backgroundColor: 'red',
            color: '#000000',
            borderColor: '#000000',
            borderRadius: '5px',
            padding: '10px 20px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            View More
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Aboutus