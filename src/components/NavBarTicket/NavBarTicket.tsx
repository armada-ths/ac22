import React, { FC } from 'react'
import './NavBarTicket.css'
import ticket_img from '../../assets/TicketState/ticket-img.svg'
import { Link } from "react-router-dom";

interface Props {
    collectedTickets: number;
}
const NavBarTicket: FC<Props> = ({ collectedTickets}) => {
    return(
        <Link to="/profile" className='small-ticket-background'>
            <img src={ticket_img}/>x {collectedTickets}</Link>
    )
}
export default NavBarTicket