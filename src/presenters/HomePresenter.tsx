import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import HomeViewer from "../views/Home";
import Sidebar from "../components/Sidebar/Sidebar";
import { Company, Tickets } from "../models/DummyModel";
import "./Presenter.css";
import DashboardView from "../views/DashboardView/DashboardView";
import NavBar from "../components/NavBar/NavBar";

interface Props {
  userModel: UserModel;
  companies: Company[];
  tickets: Tickets[];
  onStar: () => void;
  collectedTickets: number;
  name: String[];
}

const HomePresenter: FC<Props> = ({
  userModel,
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
        userModel={userModel}
        companies={companies}
        availableTickets={tickets}
        onStar={onStar}
      />
    </div>
  );
};

export default HomePresenter;
