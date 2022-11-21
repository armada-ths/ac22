import React, { FC } from "react";
import "./Presenter.css";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import ProfileView from "../views/ProfileView/Profile";
import { Company, Tickets } from "../models/DummyModel";
import {
	Genders,
	CompletionYear,
	YearOfStudy,
	StudyProgramme,
} from "../components/MultiStepForm/Forms/StudyInformation";

interface Props {
	companies: Company[];
	tickets: Tickets[];
	onStar: () => void;
	collectedTickets: number;
	name: String[];
}

const ProfilePresenter: FC<Props> = ({
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
				title="Profile"
				collectedTickets={collectedTickets}
				qrButtonActive={true}
			/>

			<div className="sidebarPage">
				<Sidebar />
			</div>
			<ProfileView placeholder="Profile view" />
		</div>
	);
};

export default ProfilePresenter;
