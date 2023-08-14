import React from 'react'
import { useState } from 'react'
import InputMask from './InputMask'
import Groups from './Groups'

export default function Randomizer() {
const [groupName, setGroupName] = useState()
const [members, setMembers] = useState([])
  return (
    <div>
        <InputMask groupName={groupName} setGroupName={setGroupName} members={members} setMembers={setMembers}/>
        <Groups groupName={groupName}  members={members} />
    </div>
  )
}
