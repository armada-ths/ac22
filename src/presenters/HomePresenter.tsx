import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import HomeViewer from "../views/Home";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Presenter.css";

interface Props {
	placeholder?: string;
	model?: UserModel;
}

const HomePresenter: FC<Props> = ({ model }) => {
	return (
		<div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<HomeViewer model={model} />
		</div>
	);
};

export default HomePresenter;
