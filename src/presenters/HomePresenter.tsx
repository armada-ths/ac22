import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import HomeViewer from "../views/Home";
import Sidebar from "../components/Sidebar/Sidebar";
import { Company, Tickets } from '../models/DummyModel'
import "./Presenter.css";
import DashboardView from "../views/DashboardView/DashboardView";

interface Props {
	companies: Company[];
    tickets: Tickets[];
    onStar:() => void;
}

const HomePresenter: FC<Props> = ({ companies, tickets, onStar }) => {
	return (
		<div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<DashboardView companies={companies} availableTickets={tickets} onStar={onStar}/>
		</div>
	);
};

export default HomePresenter;
