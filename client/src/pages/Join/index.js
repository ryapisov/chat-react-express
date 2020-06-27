import React, {useState} from 'react'
import {Link}    from 'react-router-dom'
import Form      from 'react-bootstrap/Form'
import Button    from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import Col       from 'react-bootstrap/Col'

const Join =()=>{
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return(
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="4">
          <Form>

            <Form.Group>
              <Form.Label>ваше имя</Form.Label>
              <Form.Control type="text" placeholder="пользователь" value={name} onChange={(e)=>setName(e.target.value)} />
              <Form.Text className="text-muted">
                введите имя пользователя
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Комната</Form.Label>
              <Form.Control type="text" placeholder="комната" value={room} onChange={(e)=>setRoom(e.target.value)}/>
              <Form.Text className="text-muted">
                введите названия комнаты
              </Form.Text>
            </Form.Group>

            <Link to={`/chat?name=${name}&room=${room}`}>
              <Button variant="primary">
                войти
              </Button>
            </Link>

          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Join
