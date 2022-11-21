import React, { FC } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Company, Tickets } from "../models/DummyModel";
import "./Presenter.css";
import DashboardView from "../views/DashboardView/DashboardView";
import NavBar from "../components/NavBar/NavBar";
import { ExhibitorCompanies } from "../models/ExhibitorConst";

interface Props {
  companies: Company[];
  tickets: Tickets[];
  onStar: () => void;
  collectedTickets: number;
  name: String[];
}

const HomePresenter: FC<Props> = ({
  name,
  companies,
  tickets,
  onStar,
  collectedTickets,
}) => {
  return (
    <div className="mainFlex">
      <NavBar
        name={name}
        title="Dashboard"
        collectedTickets={collectedTickets}
        qrButtonActive={true}
      />
      <div className="sidebarPage">
        <Sidebar />
      </div>
      <DashboardView
        companies={ExhibitorCompanies}
        availableTickets={tickets}
        onStar={onStar}
        collectedTickets={collectedTickets}
      />
    </div>
  );
};

export default HomePresenter;
