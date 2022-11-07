import React, { FC, useState } from 'react'
import ACInput from "../../ACInput/ACInput";

type AccountData = {
    email: string,
    password: string,
    repeatPassword: string
}

type Props = AccountData & {
    updateFields: (data: Partial<AccountData>) => void
}

const AccountForm: FC<Props> = ({ email, password, repeatPassword, updateFields }) => {
  const [username, setUsername] = useState<string>("");
  return (
    <div style={{
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
        <h2>Get Registered</h2>
        <ACInput type="email" placeholder="Email" value={email} onChange={e => updateFields({ email: e.target.value })}/>
        <ACInput type="email" placeholder="Password" value={email} onChange={setUsername}/>
        <ACInput type="email" placeholder="Repeat Password" value={email} onChange={setUsername}/>
    </div>
  )
}

export default AccountForm