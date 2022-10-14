import React, { FC } from 'react'
import './CompanyHeader.css'

interface Props {
    location: string;
    language: string;
    tickets: number;
    onScan: any; // Check later
}

const CompanyHeader: FC<Props>= ({ location, language, tickets, onScan }) =>{
  return (
    <div className='header-box'>
        <div>{location}</div>
        <div>{language}</div>
        <div>{tickets}</div>
        <div>
            <button onClick={() => {onScan()}}></button>
        </div>
    </div>
  )
}

export default CompanyHeader