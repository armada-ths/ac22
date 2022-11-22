import React, { FC } from "react";
import "./AllOrganisationView.css";
import { Company, Tickets } from "../../models/DummyModel";
import CompanyCardsRow from "../../components/CompanyCardsRow/CompanyCardsRow";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {
  companies: Company[];
  onStar: () => void;
  availableTickets: Tickets[];
}

const AllOrganisationView: FC<Props> = ({
  companies,
  onStar,
  availableTickets,
}) => {
  return (
    <div className="inner-box">
      <div className="card-flex">
        <div className="row" style={{ marginTop: "1rem" }}>
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={0}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={2}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={4}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={6}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={8}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={10}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={12}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOrganisationView;
