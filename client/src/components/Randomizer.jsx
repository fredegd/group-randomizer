import React, { useEffect } from 'react'
import { useState } from 'react'
import InputMask from './InputMask'
import Groups from './Groups'
import axios from "axios"

export default function Randomizer() {
const [title, setTitle] = useState("")
const [members, setMembers] = useState([])

useEffect(() => {
axios.post("http://localhost:3010/api/create/group", {title, members}, { withCredentials: true })
    .then((response)=>{
      const tokenValue = response.data
      console.log(tokenValue)
    })
    .catch((err)=>console.error(err))
}, [title, members]);

  return (
    <div>
        <InputMask title={title} setTitle={setTitle} members={members} setMembers={setMembers}/>
        <Groups title={title}  members={members} />
    </div>
  )
}
