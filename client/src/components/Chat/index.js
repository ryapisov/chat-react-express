import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar'
import InputSend from '../InputSend'
import Messages from '../Messages'

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

    socket.emit('join', {name, room}, ()=>{

    })

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

  console.log(message, messages)

  return(
    <>
      <h1>Chat</h1>
      <InfoBar room={room}/>
      <Messages messages={messages} name={name}/>
      <InputSend message={message} setMessage={setMessage} sendMessage={sendMessage}/>

      <div></div>
    </>
  )
}

export default Chat
