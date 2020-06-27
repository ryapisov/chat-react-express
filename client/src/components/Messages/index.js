import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message'

const Messages = ({messages, name})=>{
  return <ScrollToBottom>
    {messages.map((mess, k)=> <div key={k}><Message message={mess} name={name}/></div>)}
  </ScrollToBottom>
}

export default Messages
