import React, { FC } from "react";
import EventViewer from "../views/Events";

import "./Presenter.css";
import Sidebar from "../components/Sidebar/Sidebar";




interface Props {
	placeholder?: string;
}

const EventsPresenter: FC<Props> = () => {
	return(
		<div className="mainFlex">
			<Sidebar/>
		</div>
	);
};

export default EventsPresenter;
