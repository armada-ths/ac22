import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import AllOrganisationView from "../views/AllOrganisationView//AllOrganisationView";
import "./Presenter.css";
import { Company, Tickets } from "../models/DummyModel";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";

interface Props {
	companies: Company[];
	tickets: Tickets[];
	onStar: () => void;
	collectedTickets: number;
	name: String[];
}

const AllOrganisationPresenter: FC<Props> = ({
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
			/>
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<AllOrganisationView
				companies={companies}
				availableTickets={tickets}
				onStar={onStar}
			/>
		</div>
	);
};

export default AllOrganisationPresenter;
