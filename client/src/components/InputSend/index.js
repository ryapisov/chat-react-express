import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const InputSend =({message, setMessage, sendMessage})=>{
  return(
    <Form.Group className="mt-4">
      <Form.Control
        as="textarea"
        rows="3"
        placeholder="message"
        onChange={(e)=>setMessage(e.target.value)} value={message}
        onKeyPress={e=> e.key === 'Enter' ? sendMessage(e) : null}
      />
      <Button variant="primary" className="mb-3 mt-3" onClick={(e)=>sendMessage(e)}>
        отправить
      </Button>
    </Form.Group>
  )
}
export default InputSend
