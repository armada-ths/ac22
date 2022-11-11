import React, { FC } from "react";
import HomeViewer from "../views/Home";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Presenter.css";

interface Props {
	placeholder?: string;
}

const HomePresenter: FC<Props> = () => {
	return (
		<div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			<HomeViewer />
		</div>
	);
};

export default HomePresenter;
