import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io          from 'socket.io-client'
import Row         from 'react-bootstrap/Row'
import Col         from 'react-bootstrap/Col'
import InfoBar     from '../../components/InfoBar'
import InputSend   from '../../components/InputSend'
import Messages    from '../../components/Messages'
import Users       from '../../components/Users'

let socket

const Chat =({location})=>{
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:5000'

  useEffect(()=>{
    const {name, room, chat} = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)

    socket.emit('join', {name, room}, ()=>{})

    return ()=>{
      socket.emit('disconnect')
      socket.off()
    }

  }, [ENDPOINT, location.search])


  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessages([...messages, message])
    })
  }, [messages])

  // function for sending messages
  const sendMessage =(e)=>{
    e.preventDefault()

    if(message){
      socket.emit('sendMessage', message, ()=> setMessage(''))
    }
  }

  return(
    <>
      <InfoBar room={room}/>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="2" className="bg-warning">
          <Users />
        </Col>
        <Col xs lg="6">
          <Messages messages={messages} name={name}/>
          <InputSend message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </Col>
      </Row>
    </>
  )
}

export default Chat
