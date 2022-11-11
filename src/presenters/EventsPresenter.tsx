import React, { FC } from "react";
import EventViewer from "../views/Events";

import "./Presenter.css";
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {
	placeholder?: string;
}

const EventsPresenter: FC<Props> = () => {
	return (
		<div className="mainFlex">
			<div className="sidebarPage">
				<Sidebar />
			</div>
			Make the page here
		</div>
	);
};

export default EventsPresenter;
