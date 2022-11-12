import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import AllOrganisationView from "../views/AllOrganisationView//AllOrganisationView";
import "./Presenter.css";
import { Company, Tickets } from '../models/DummyModel'
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {
	companies: Company[];
    tickets: Tickets[];
    onStar:() => void;
}

const AllOrganisationPresenter: FC<Props> = ({ companies, onStar, tickets }) => {
	return (
        <div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<AllOrganisationView companies={companies} availableTickets={tickets} onStar={onStar}/>
		</div>
        
	);
};

export default AllOrganisationPresenter;
