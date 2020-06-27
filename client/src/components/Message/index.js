import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Message = ({message: {user, text}, name, variant})=>{
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if(user === trimmedName){
    isSentByCurrentUser = true
  }

  return(
    isSentByCurrentUser
      ?
        <Alert key="0" variant={variant} style={{background:'#483D8B', color:'#fff'}}>
          {trimmedName}<br/>{text}
        </Alert>
      :
        <Alert key="0" variant={variant} style={{background:'#483D8B', color:'#fff'}}>
          {trimmedName}<br/>{text}
        </Alert>
  )
}

export default Message
