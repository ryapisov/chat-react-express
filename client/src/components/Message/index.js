import React from 'react'

const Message = ({message: {user, text}, name})=>{
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if(user === trimmedName){
    isSentByCurrentUser = true
  }

  return(
    isSentByCurrentUser
      ?
        <p>
          {trimmedName}
          {text}
        </p>
      :
        <p>
          {trimmedName}
          {text}
        </p>


  )

}



export default Message







// import Alert from 'react-bootstrap/Alert'
// import Form from 'react-bootstrap/Form'
//
// export default function message({variant}){
//   return (
//     <Alert key="0" variant={variant} style={{background:'#483D8B', color:'#fff'}}>
//      This is a  alert—check it out!<br/>asdfsadfs
//     </Alert>
//   )
// }
