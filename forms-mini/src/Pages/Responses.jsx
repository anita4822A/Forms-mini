import React, { useEffect, useState } from 'react'
import ResponseComponent from '../Component/ResponseComponent'
import "./Responses.css"

const Responses = () => {

  const [users, setUsers ] = useState([])

 const getData = async () => {
  const res = await fetch("http://localhost:5000/api/getData", {
    header : {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  setUsers(data.users)
  console.log(users)
 }
 useEffect(()=>{
     getData()
 },[])

  return (
    <div id='maincontainer'>
      {
        users.map((users)=>{
          return <ResponseComponent key={users._id} name={users.name} id={users._id} email={users.email} phone={users.phone} message={users.message} />
        })
      }
        
       

    </div>
  )
}

export default Responses