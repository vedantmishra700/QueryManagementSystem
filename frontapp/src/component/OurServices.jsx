import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurServices = () => {
  return (
    <div style={{ padding: '60px 0', backgroundColor: '#f7f7f7' }}>
      <Container>
        <div className="text-center">
          <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Our Services</h2>
          <p style={{ marginBottom: '40px', color: '#6c757d' }}>
            From equipment maintenance to workforce training, we're your one-stop safety solution
          </p>
        </div>
        <Row>
          <Col md={4} className="mb-4">
            <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img 
                variant="top" 
                src="https://i.ibb.co/NC4Gbhk/after-sale-service-home-1.png" 
                alt="Authorised Service Centres" 
                style={{ borderRadius: '5px 5px 0 0' }} 
              />
              <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontWeight: 'bold' }}>Authorised Service Centres</Card.Title>
                <Card.Text>
                  KARAM's Authorised Service Centre inspects, repairs and revalidates PPE, harnesses, lanyards, blocks, tripods and FLS. They...
                </Card.Text>
                <Card.Link href="#" style={{ color: '#ff0000', fontWeight: 'bold', textDecoration: 'none' }}>
                  &rarr;
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img 
                variant="top" 
                src="https://i.ibb.co/18LtJfX/demo-van-karam-0.jpg" 
                alt="Training & Consultancy" 
                style={{ borderRadius: '5px 5px 0 0' }} 
              />
              <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontWeight: 'bold' }}>Training & Consultancy</Card.Title>
                <Card.Text>
                  KARAM's Training & Consultancy (KTC) institute promotes safety by training a workforce that values lives. KTC is focused on Industrial, Application specific and Telecom training, based on national and international standards.
                </Card.Text>
                <Card.Link href="#" style={{ color: '#ff0000', fontWeight: 'bold', textDecoration: 'none' }}>
                  &rarr;
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img 
                variant="top" 
                src="https://i.ibb.co/jrCS7Mn/training-consultancy-img-01.jpg" 
                alt="Mobile Demo Van" 
                style={{ borderRadius: '5px 5px 0 0' }} 
              />
              <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontWeight: 'bold' }}>Mobile Demo Van</Card.Title>
                <Card.Text>
                  KARAM re-introduces its latest state-of-the-art Mobile Demo Van (MDV). The MDV exhibits KARAM's range of PPE and fall protection solutions, bridging the safety knowledge and practical implementation gap, by delivering safety products and...
                </Card.Text>
                <Card.Link href="#" style={{ color: '#ff0000', fontWeight: 'bold', textDecoration: 'none' }}>
                  &rarr;
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurServices