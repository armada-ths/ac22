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
  currentCompany?: number;
  starred?: boolean;
}

const CompanyCardsRow: FC<Props> = ({
  userModel,
  companies,
  availableTickets,
  onStar,
  a,
  onCardClick,
  currentCompany,
  starred,
}) => {
  if (starred) {
    companies = companies.filter((company) =>
      userModel.starredCompanies.includes(company.name)
    );
  }
  function getCards() {
    let n = 2;
    if (
      currentCompany &&
      companies
        .slice(a, a + 2)
        .filter((company) => company.id !== currentCompany).length === 1
    )
      n++;
    return companies.slice(a, a + n).map((company) => {
      if (currentCompany && company.id === currentCompany) return;
      let ticketState =
        company.collectedTickets > 0
          ? "received"
          : availableTickets[company.id].nrOfTickets > 0
          ? "available"
          : "none available";
      return (
        <div key={company.name} className="company-card">
          <CompanyCard
            userModel={userModel}
            image={company.image}
            companyName={company.name}
            tags={company.tags}
            starred={userModel.isStarred(company.name)}
            onStar={onStar}
            ticketState={ticketState}
            receivedTickets={company.collectedTickets}
            onCardClick={onCardClick}
            companyId={company.id}
          ></CompanyCard>
        </div>
      );
    });
  }
  return <div className="company-cards">{getCards()}</div>;
};

export default CompanyCardsRow;
