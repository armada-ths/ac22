import React, { FC } from "react";
import "./AllOrganisationView.css";
import { Company, Tickets } from "../../models/DummyModel";
import CompanyCardsRow from "../../components/CompanyCardsRow/CompanyCardsRow";
import Sidebar from "../../components/Sidebar/Sidebar";
import { UserModel } from "../../models/UserModel";

interface Props {
  userModel: UserModel;
  companies: Company[];
  onStar: () => void;
  availableTickets: Tickets[];
}

const AllOrganisationView: FC<Props> = ({
  userModel,
  companies,
  onStar,
  availableTickets,
}) => {
  return (
    <div className="inner-box">
      <div className="card-flex">
        <div className="row">
          <CompanyCardsRow
            userModel={userModel}
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={0}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            userModel={userModel}
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={3}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            userModel={userModel}
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={6}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            userModel={userModel}
            companies={companies}
            availableTickets={availableTickets}
            onStar={() => onStar()}
            a={9}
          />
        </div>
        <div className="row">
          <CompanyCardsRow
            userModel={userModel}
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
