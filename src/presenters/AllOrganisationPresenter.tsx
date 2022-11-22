import React, { FC } from "react";
import AllOrganisationView from "../views/AllOrganisationView//AllOrganisationView";
import "./Presenter.css";
import { Company, Tickets } from "../models/DummyModel";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import { UserModel } from "../models/UserModel";
import { ExhibitorCompanies } from "../models/ExhibitorConst";

interface Props {
  userModel: UserModel;
  companies: Company[];
  tickets: Tickets[];
  onStar: (companyName: string) => void;
  collectedTickets: number;
  name: String[];
}

const AllOrganisationPresenter: FC<Props> = ({
  userModel,
  companies,
  onStar,
  tickets,
  collectedTickets,
  name,
}) => {
  return (
    <div className="mainFlex">
      <NavBar
        name={name}
        title="All Organisations"
        collectedTickets={collectedTickets}
        qrButtonActive={true}
      />
      <div className="sidebarPage">
        <Sidebar />
      </div>
      <AllOrganisationView
        userModel={userModel}
        companies={ExhibitorCompanies}
        availableTickets={tickets}
        onStar={onStar}
      />
    </div>
  );
};

export default AllOrganisationPresenter;
