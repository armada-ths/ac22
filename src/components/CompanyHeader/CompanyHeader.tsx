import React, { FC } from 'react'
import './CompanyHeader.css'
import InfoLayout from '../InfoLayout/InfoLayout'

interface Props {
    location: string;
    stall: number;
    tickets: number;
    onScan: any; // Check later
}

const CompanyHeader: FC<Props>= ({ location, stall, tickets, onScan }) =>{
  return (
    <div className='header-box'>
        <InfoLayout title="LOCATION" info={location}/>
        <InfoLayout title="STALL" info={stall}/>
        <InfoLayout title="SUPER TICKETS" info={tickets}/>
        <div>
            <button onClick={() => {onScan()}}></button>
        </div>
    </div>
  )
}

export default CompanyHeader