import React, { FC } from "react";
import "./Presenter.css";
import Sidebar from "../components/Sidebar/Sidebar";

import ProfileView from "../views/ProfileView/Profile";

interface Props {
	placeholder?: string;
}

const ProfilePresenter: FC<Props> = () => {
	return (
		<div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<ProfileView placeholder="Profile view"/>
		</div>
	);
};
 
export default ProfilePresenter;
