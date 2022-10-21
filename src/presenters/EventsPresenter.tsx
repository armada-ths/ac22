import React, { FC } from "react";
import EventViewer from "../views/Events";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Presenter.css";

interface Props {
	placeholder?: string;
}

const EventsPresenter: FC<Props> = () => {
	return(
		<div className="mainFlex">
      <Sidebar/>
			<EventViewer />
		</div>
	);
};

export default EventsPresenter;
