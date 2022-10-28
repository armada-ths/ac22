import React, { FC } from 'react'
import './CompanyHeader.css'

import InfoLayout from '../InfoLayout/InfoLayout'
import StarButtonHeader from '../StarButton/StarButtonHeader'

import location_img from '../../assets/CompanyHeader/location-img.svg'
import stall_img from '../../assets/CompanyHeader/stall-img.svg'
import ticket_img from '../../assets/TicketState/ticket-img.svg'
import plus_sign_img from '../../assets/TicketState/plus-sign-img.svg'


/**
 * location:    location of stall
 * stall:       number of the stall
 * tickets:     number of tickets left
 * starred:     used to check whether the company is starred or not
 * onStar:      callback function that is called when the button is pressed
 */
interface Props {
    location: string;
    stall: number;
    tickets: number;
    starred: boolean;
    onStar: () => void;
}

const CompanyHeader: FC<Props> = ({ location, stall, tickets, starred, onStar }) => {
  return (
    <div className='header-box'>
        <div className='icon-box location'>
            <img src={location_img} alt="location icon"></img>
            <InfoLayout title="LOCATION" info={location}/>
        </div>
        <div className='line'></div>
        <div className='icon-box stall'>
            <img src={stall_img} alt="stall icon"></img>
            <InfoLayout title="STALL" info={"#" + stall}/>
        </div>
        <div className='line'></div>
        <div className='icon-box ticket'>
            <div className='ticket-logo'>
                <img src={ticket_img} width={32} height={32}></img>
                <img className='ticket-plus-sign' src={plus_sign_img} width={20} height={20}></img>
            </div>
            <InfoLayout title="SUPER TICKETS" info={tickets + " Left"}/>
        </div>
        <div className='line'></div>
        <StarButtonHeader starred={starred} onStar={() => onStar()}></StarButtonHeader>
    </div>
  )
}

export default CompanyHeader