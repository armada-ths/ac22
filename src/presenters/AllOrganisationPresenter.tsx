import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import AllOrganisationView from "../views/AllOrganisationView//AllOrganisationView";
import "./Presenter.css";
import { Company, Tickets } from '../models/DummyModel'

interface Props {
	companies: Company[];
    tickets: Tickets[];
    onStar:() => void;
}

const AllOrganisationPresenter: FC<Props> = ({ companies, onStar, tickets }) => {
	return (
        <AllOrganisationView companies={companies} availableTickets={tickets} onStar={onStar}/>
	);
};

export default AllOrganisationPresenter;
