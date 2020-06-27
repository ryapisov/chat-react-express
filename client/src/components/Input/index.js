import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Input =({message, setMessage, sendMessage})=>{

  return(
    <>
    <Form.Control type="text"
      placeholder="message"
      onChange={(e)=>setMessage(e.target.value)} value={message}
      onKeyPress={e=> e.key === 'Enter' ? sendMessage(e) : null}
    />
    <Button variant="primary" type="submit" className="mb-3 mt-3" onClick={(e)=>sendMessage(e)}>
      отправить
    </Button>
    </>
  )
}

export default Input
