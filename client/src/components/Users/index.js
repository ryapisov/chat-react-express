import React, {useEffect} from 'react'
import User from '../User'

const Users = ({users})=>{
  users = [
    1,1,1,1,1,1,
    1,1,1,1,1,1,
    1,1,1,1,1,1,
    1,1,1,1,1,1,
    1,1,1,1,1,1,
  ]

  let elem
  useEffect(()=>{
    elem.scrollTop = elem.scrollHeight
  })

  return(
    <div ref={e=>elem=e} style={{height:'400px', overflow: 'auto'}}>
      { users.map((user, key)=> <User key={key} name={'пользователь'}/> ) }
    </div>
  )
}

export default Users
