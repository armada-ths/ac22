import React, { FC } from 'react'
import './TicketCounter.css'
import ticket_img from '../../assets/TicketState/ticket-img.svg'


interface Props {
    tickets: number
}
const TicketCounter: FC<Props> = ({ tickets }) => {
    return (
        <div className="counterbox">
            <div className='title'>YOUR TICKETS</div>
            <div className='ticket-flex'>
                <img src={ticket_img}/ >
                <div className='tickets'>{tickets}</div>

            </div>

            <div className='exposition'> Collect tickets through active participation in THS Armada. The more tickets you collect, greater the chances of winning during the raffle!</div>
        </div>
    )
}

export default TicketCounter