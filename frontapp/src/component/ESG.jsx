import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const ESG = () => {
  return (
    <section className="esg py-5">
      <Container>
        <Row>
        <Col className="text-center">
            <h2><b>Environmental Social & Governance</b></h2>
            <br/>
            <p>Committed to fostering a safer, sustainable future for everyone</p>
            <br/>
            </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://i.ibb.co/pnM8Zmp/KARAM-Volunteers-Supporting-Education.jpg" />
              <Card.Body>
                <Card.Title>KARAM Volunteers Supporting Education and Development at Udyat Kheda Primary School</Card.Title>
                <Card.Text>
                At KARAM, we believe in giving back to the community. As part of our CSR initiatives our ....
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://i.ibb.co/4P4NCcM/Koshika-Foundation-01.jpg" />
              <Card.Body>
                <Card.Title>KARAM Volunteers Make a Difference for Children with Retinoblastoma</Card.Title>
                <Card.Text>
                KARAM volunteers, in association with Koshika Foundation, recently facilitated a visit to Dr. Shroff's....
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://i.ibb.co/SwKyVZM/AC-Duct-Water-Harvesting-01.jpg" />
              <Card.Body>
                <Card.Title>KARAM Saves Water with Innovation</Card.Title>
                <Card.Text>
                At KARAM, we believe in responsible resource management. That is why we are excited to share our ...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ESG