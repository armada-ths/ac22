import React, { FC } from "react";
import "./CompanyCard.css";

import CardStarButton from '../StarButton/CardStarButton'
import TicketState from '../TicketsState/TicketState'

interface Props { // Too many arguments?
  image: string;
  companyName: string;
  starred: boolean;
  onStar: () => void;
  ticketState: number; // Is this really the smartest way?
  receivedTickets: number;
}

/*Having trouble setting the backgroundImage*/
const CompanyCard: FC<Props> = ({ image, companyName, starred, onStar, ticketState, receivedTickets }) => {
  return (
    <div className="card-box">
        <div className="card-background-image" style={{backgroundColor: image}}></div>
        <div className="card-body">
          <div className="card-header">
            <div>
              <h1>{companyName}</h1>
              <h2>Tags</h2>
            </div>
            <div>
              <CardStarButton starred={starred} onStar={() => onStar()}></CardStarButton>
            </div>
          </div>

          <TicketState ticketState={ticketState} receivedTickets={receivedTickets}></TicketState>
        </div>
    </div>
  );
};

export default CompanyCard;