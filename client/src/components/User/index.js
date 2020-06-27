import React from 'react'
import Row   from 'react-bootstrap/Row'
import Col   from 'react-bootstrap/Col'

const User =({name})=>{
  return(
    <Row>
      <Col>
        {name}
      </Col>
    </Row>
  )
}
export default User
