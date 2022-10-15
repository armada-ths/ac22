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
			<img className="armada-icon" src={armada_logo} alt="Armada Logo" />
			<div className="sidebar-icons-flex">
				<div className="sidebar-LinkButton">
					<Link to="/">
						<img src={dashboard_grey} alt="dashboard" />
					</Link>
				</div>
				<div className="sidebar-LinkButton">
					<Link to="/events">
						<img src={events_grey} alt="dashboard" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
