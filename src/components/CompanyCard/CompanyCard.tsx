import React, { FC } from "react";
import "./CompanyCard.css";

import StarButtonCard from "../StarButton/StarButtonCard";
import TicketState from "../TicketState/TicketState";

/**
 * image:           the image that will be displayed
 * companyName:     the company name
 * starred:         tells the component if the company is starred by the user
 * onStar:          callback function that is called when the button is pressed
 * ticketState:     tells the component in which ticket state the company is in
 *                  relative to the specific user
 * receivedtickets: tells how many tickets the user has collected (if any are collected)
 *
 * Too many arguments, what do you think?
 */
interface Props {
  image: string;
  companyName: string;
  tags: string[];
  starred: boolean;
  onStar: (companyName: string) => void;
  ticketState: string;
  receivedTickets: number;
}

/**
 * I am having trouble setting the backgroundImage attribute
 * therefore I am just using backgroundColor for now
 */
export const CompanyCard: FC<Props> = ({
  image,
  companyName,
  tags,
  starred,
  onStar,
  ticketState,
  receivedTickets,
}) => {
  return (
    <div className="card-box">
      <div
        className="card-background-image"
        style={{ backgroundColor: image }}
      ></div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="h1">{companyName}</span>
            <span className="h2">
              {tags.map((tag) => {
                /**
                 * Should we keep this logic where all tags are printed
                 * or stick to only two tags being printed for each company?
                 */
                if (tag == tags.at(-1)) return <span key={tag}>{tag}</span>;
                else return <span key={tag}>{tag + " · "}</span>;
              })}
            </span>
          </div>
          <StarButtonCard
            starred={starred}
            onStar={() => onStar(companyName)}
          ></StarButtonCard>
        </div>

        <TicketState
          ticketState={ticketState}
          receivedTickets={receivedTickets}
        ></TicketState>
      </div>
    </div>
  );
};

export default CompanyCard;
