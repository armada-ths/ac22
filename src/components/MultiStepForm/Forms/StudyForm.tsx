import React, { FC, useState } from 'react'
import ACInput from '../../ACInput/ACInput'

interface Props{}

const StudyForm: FC<Props> = ({}) => {
    const [username, setUsername] = useState<string>("");
  return (
    <div>
        <ACInput type="email" placeholder="Email" value={username} onChange={setUsername}/>
        <ACInput type="email" placeholder="Password" value={username} onChange={setUsername}/>
        <ACInput type="email" placeholder="Repeat Password" value={username} onChange={setUsername}/>
    </div>
  )
}

export default StudyForm