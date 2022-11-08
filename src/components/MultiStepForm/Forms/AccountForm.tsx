import React, { FC, useState } from 'react'
import ACInput from "../../ACInput/ACInput";
import "../MultiStepForm.css";

type AccountData = {
    email: string,
    password: string,
    repeatPassword: string
}

interface Props extends AccountData {
    updateField: (data: Partial<AccountData>) => void
}

const AccountForm: FC<Props> = ({ email, password, repeatPassword, updateField }) => {
  return (
    <div className='form-content'
    >
        <h2>Get Registered</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => updateField({ email: e.target.value })}/>
        <input placeholder="Password" value={password} onChange={(e) => updateField({ password: e.target.value })}/>
        <input placeholder="Repeat Password" value={repeatPassword} onChange={(e) => updateField({ repeatPassword: e.target.value })}/>
    </div>
  )
}

export default AccountForm