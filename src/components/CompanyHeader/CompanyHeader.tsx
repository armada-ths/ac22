import React, { FC } from 'react'
import './CompanyHeader.css'

import InfoLayout from '../InfoLayout/InfoLayout'

interface Props {
    location: string;
    stall: number;
    tickets: number;
    starred: boolean;
    onStar: () => void;
}

const CompanyHeader: FC<Props> = ({ location, stall, tickets, starred, onStar }) => {
  const [star, setStar] = React.useState(starred);
  return (
    <div className='header-box'>
        <InfoLayout title="LOCATION" info={location}/>
        <InfoLayout title="STALL" info={stall}/>
        <InfoLayout title="SUPER TICKETS" info={tickets}/>
        <div>
            <button onClick={() => {
              onStar()
              setStar(!star)}}>{star ? "Unstar" : "Star"}</button>
        </div>
    </div>
  )
}

export default CompanyHeader