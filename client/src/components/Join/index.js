import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Join =()=>{
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return(
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>ваше имя</Form.Label>
      <Form.Control type="text" placeholder="пользователь" value={name} onChange={(e)=>setName(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Комната</Form.Label>
      <Form.Control type="text" placeholder="комната" value={room} onChange={(e)=>setRoom(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Link to={`/chat?name=${name}&room=${room}`}>
    <Button variant="primary">
      войти
    </Button>
    </Link>
    </Form>
  )
}

export default Join
