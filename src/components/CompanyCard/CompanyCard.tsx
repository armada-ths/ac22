import React, { FC } from "react";
import "./CompanyCard.css";

import StarButtonCard from "../StarButton/StarButtonCard";
import TicketState from "../TicketState/TicketState";
import { UserModel } from "../../models/UserModel";
import { Link } from "react-router-dom";

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
  userModel: UserModel;
  image: string;
  companyName: string;
  tags: string[];
  starred: boolean;
  onStar: (companyName: string) => void;
  ticketState: string;
  receivedTickets: number;
  onCardClick?: (id: number) => void;
  companyId: number;
}

/**
 * I am having trouble setting the backgroundImage attribute
 * therefore I am just using backgroundColor for now
 */
export const CompanyCard: FC<Props> = ({
  userModel,
  image,
  companyName,
  starred,
  onStar,
  ticketState,
  receivedTickets,
  onCardClick,
  companyId,
}) => {
  return (
    <div className="card-box">
      <div
        className="card-background-image"
        style={{ backgroundImage: `url(${image})`, overflow: "hidden" }}
      ></div>

      <div className="card-body">
        <div className="card-header">
          <Link
            to={"/company"}
            onClick={() => {
              userModel.updateCurrentCompany(companyId);
              if (onCardClick) onCardClick(userModel.currentCompany);
              window.scrollTo(0, 0);
            }}
          >
            <div className="card-header-title">
              <span className="h1">{companyName}</span>
            </div>
          </Link>
          <StarButtonCard
            starred={starred}
            onStar={() => onStar(companyName)}
          ></StarButtonCard>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
