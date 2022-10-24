import React, { FC } from 'react'
import './CompanyHeader.css'

import InfoLayout from '../InfoLayout/InfoLayout'
import HeaderStarButton from '../HeaderStarButton/HeaderStarButton'

import star_img from '../../assets/CompanyView/star-img.svg'

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
        <InfoLayout title="LOCATION" info={location} icon={1}/>
        <InfoLayout title="STALL" info={stall} icon={2}/>
        <InfoLayout title="SUPER TICKETS" info={tickets} icon={3}/>
        <HeaderStarButton onStar={() => onStar()} setStar={() => setStar(!star)} star={star}></HeaderStarButton>
    </div>
  )
}

export default CompanyHeader