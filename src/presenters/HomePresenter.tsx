import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import HomeViewer from "../views/Home";
import Sidebar from "../components/Sidebar/Sidebar";
import { Company, Tickets } from '../models/DummyModel'
import "./Presenter.css";
import DashboardView from "../views/DashboardView/DashboardView";
import NavBar from "../components/NavBar/NavBar";

interface Props {
	companies: Company[];
    tickets: Tickets[];
    onStar:() => void;
	collectedTickets: number;
	name: String[];
}

const HomePresenter: FC<Props> = ({ name, companies, tickets, onStar, collectedTickets }) => {
	return (
		<div className="mainFlex">
			<NavBar name={name} title="Dashboard" collectedTickets={collectedTickets}/>
			<div className="sidebarPage">
				<Sidebar/>
			</div>
			<DashboardView companies={companies} availableTickets={tickets} onStar={onStar}/>
		</div>
	);
};

export default HomePresenter;
