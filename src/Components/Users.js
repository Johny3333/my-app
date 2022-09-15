import React, { useEffect, useState } from 'react'

const Users=({users,loading,query,handleChild})=> {
 
    if(loading){
        return <h2>loading.....</h2>
    }

  
  

  return <>
  


<ul className='list-group mb-4'>
  {users.filter((user)=>
  user.name.toLowerCase().includes(query)
  ).
  map((ele)=>{
   
    return <li key={ele.id} className='list-group-item' >
      Name:{ele.name}
      <br></br>
      UserName:{ele.username}
    <br></br>
      Email:{ele.email}
      <br></br>
      Phone:{ele.phone}
    </li>
   
  })}
  </ul>

  </>
}

export default Users