import React, {useEffect} from 'react'
import Message from '../Message'

const Messages = ({messages, name})=>{

  let elem
  useEffect(()=>{
    elem.scrollTop = elem.scrollHeight
  })

  return(
    <div ref={e=>elem=e} style={{height:'400px', overflow: 'auto'}}>
      { messages.map((mess, k)=> <Message key={k} message={mess} name={name}/> ) }
    </div>
  )
}

export default Messages
