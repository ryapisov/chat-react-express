import React, { useState } from 'react'
import Form              from 'react-bootstrap/Form'
import Button            from 'react-bootstrap/Button'
import axios             from 'axios'
import socket            from '../../socket'

export default ()=>{
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const onEnter =()=>{
    if (!roomId || !userName){
      return alert('Неверные данные')
    }

    axios.post('/rooms', {
      roomId,
      userName
    }).then(()=>{

    })
  }

  return(
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Номер комнаты</Form.Label>
      <Form.Control
        type="text"
        placeholder="номер комнаты"
        value={roomId}
        onChange={(e)=>setRoomId(e.target.value)}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="пользователь"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" onClick={onEnter}>
      войти комнату
    </Button>
    </Form>
  )
}
