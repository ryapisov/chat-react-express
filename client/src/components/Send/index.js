import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function send(){
  return(
    <>
      <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-4">
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3 mt-3">
        отправить
      </Button>
    </>
  )
}
