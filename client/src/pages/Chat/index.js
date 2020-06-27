import React   from 'react'
import Row     from 'react-bootstrap/Row'
import Col     from 'react-bootstrap/Col'
import Badge   from 'react-bootstrap/Badge'
import Send    from '../../components/Send'
import Message from '../../components/Message'
import User    from '../../components/User'
import socket    from '../../socket'

export default ()=>{

  function element(e){
    e.scrollTop = e.scrollHeight
  }

  return (
    <>
    <Row className="justify-content-md-center mt-5">
      <Col xs lg="3" className="p-0" style={{background:'#E6E6FA'}}>
        <div className="mb-2 mt-2">Пользователи: &nbsp;
          <Badge variant="success">9</Badge>
        </div>
        <User />
      </Col>
      <Col xs lg="6">
      <div style={{overflowY: 'auto', height:'333px'}} ref={(e)=>element(e)}>
        <Message variant="primary"/>
        <Message variant="success"/>
        <Message variant="success"/>
        <Message variant="success"/>
        <Message variant="success"/>
      </div>
      <Send />
      </Col>
    </Row>
    </>
  )
}
