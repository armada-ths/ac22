import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./CompanyCardsRow.css";

import CompanyCard from "../CompanyCard/CompanyCard";
import { Company, Tickets } from "../../models/DummyModel";
import { UserModel } from "../../models/UserModel";

/**
 * companies:        an array of companies that is used to display the cards
 * onStar:           callback function that is called when the star button is pressed
 * availableTickets: an array of the available number of tickets left for each company
 */
interface Props {
  userModel: UserModel;
  companies: Company[];
  availableTickets: Tickets[];
  onStar: (companyName: string) => void;
  a: number;
  onCardClick?: (id: number) => void;
}

const CompanyCardsRow: FC<Props> = ({
  userModel,
  companies,
  availableTickets,
  onStar,
  a,
  onCardClick,
}) => {
  function getCards() {
    return companies.slice(a, a + 3).map((company) => {
      let ticketState =
        company.collectedTickets > 0
          ? "received"
          : availableTickets[company.id].nrOfTickets > 0
          ? "available"
          : "none available";
      return (
        <div key={company.name} className="company-card">
          <Link
            to={"/company"}
            onClick={() => {
              userModel.updateCurrentCompany(company.id);
              if (onCardClick) onCardClick(userModel.currentCompany);
            }}
          >
            <CompanyCard
              image={company.image}
              companyName={company.name}
              tags={company.tags}
              starred={company.starred}
              onStar={onStar}
              ticketState={ticketState}
              receivedTickets={company.collectedTickets}
            ></CompanyCard>
          </Link>
        </div>
      );
    });
  }
  return <div className="company-cards">{getCards()}</div>;
};

export default CompanyCardsRow;
