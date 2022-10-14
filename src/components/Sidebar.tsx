import React, { FC } from "react";
import { Link } from "react-router-dom";

import armada_logo from "../Assets/Sidebar-pics/armada-logo.svg";
import dashboard_grey from "../Assets/Sidebar-pics/dashboard-grey.svg";
import events_grey from "../Assets/Sidebar-pics/events-grey.svg";
import "./Sidebar.css";

interface Props {
	placeholder?: string;
}

const Sidebar: FC<Props> = () => {
	return (
		<nav className="sidebarFlex">
			<img className="sidebar-icons" src={armada_logo} alt="Armada Logo" />
			<Link to="/">
				<img className="sidebar-icons" src={dashboard_grey} alt="dashboard" />
			</Link>
			<Link to="/events">
				<img className="sidebar-icons" src={events_grey} alt="dashboard" />
			</Link>
		</nav>
	);
};

export default Sidebar;
