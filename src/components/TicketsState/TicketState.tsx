import React, { FC } from 'react'
import "./TicketState.css";

import ticket_img from '../../assets/TicketState/ticket-img.svg'
import plus_sign_img from '../../assets/TicketState/plus-sign-img.svg'
import ticket_grey_img from '../../assets/TicketState/ticket-grey-img.svg'
import plus_sign_grey_img from '../../assets/TicketState/plus-sign-grey-img.svg'

/**
 * ticketState:     tells the component in which state the tickets are
 *                  the states are: "available", "none available" and "received"
 * receivedTickets: tells the component how many tickets the user has received
 */
interface Props {
  ticketState: string;
  receivedTickets: number;
}

const TicketState: FC<Props> = ({ ticketState, receivedTickets }) => {
  return (
    <div>
      {ticketState == "available" &&
      <div className="ticket-container">
        <div className='ticket-left'>
          <div className='ticket-logo'>
            <img src={ticket_img}></img>
            <img className='ticket-plus-sign' src={plus_sign_img}></img>
          </div>
          <span className='super-tickets'>SUPER TICKETS</span>
        </div>

        <span className='ticket-available'>AVAILABLE</span>
      </div>
      
      ||
      
      ticketState == "none available" &&
      <div className="ticket-container">
        <div className='ticket-left'>
          <div className='ticket-logo'>
            <img src={ticket_grey_img}></img>
            <img className='ticket-plus-sign' src={plus_sign_grey_img}></img>
          </div>
          <span className='super-tickets'>SUPER TICKETS</span>
        </div>

        <span className='ticket-none-available'>NONE LEFT</span>
      </div>
      
      ||
      
      ticketState == "received" &&
      <div className="ticket-received-container">
        <div className='ticket-received-box'>
          <div className='ticket-logo received'>
            <img src={ticket_img}></img>
            <img className='ticket-plus-sign' src={plus_sign_img}></img>
          </div>
          <span className='ticket-received'>x{receivedTickets} RECEIVED!</span>
        </div>
      </div>}
    </div>
    )
}

export default TicketState