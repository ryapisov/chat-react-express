import React       from 'react'
import Row         from 'react-bootstrap/Row'
import Col         from 'react-bootstrap/Col'

export default ({room})=>{
  return(
    <Row className="bg-primary text-light">
      <Col lg="12">
        <h3>Комната: {room}</h3>
      </Col>
    </Row>
  )
}
