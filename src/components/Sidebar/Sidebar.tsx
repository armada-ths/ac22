import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import armada_logo from "../../Assets/Sidebar-pics/armada-logo.svg";
import dashboard_grey from "../../Assets/Sidebar-pics/dashboard-grey.svg";
import events_grey from "../../Assets/Sidebar-pics/events-grey.svg";
import "./Sidebar.css";

interface Props {
	placeholder?: string;
}

const Sidebar: FC<Props> = () => {
	const [active, setActive] = useState<boolean>(false);
	
	return (
		<nav className="sidebarFlex">
			<img className="armada-icon" src={armada_logo} alt="Armada Logo" />
			<div className="sidebar-icons-flex">
				<div className="sidebar-LinkButton">
					<Link to="/" className="button-link" onClick={() => setActive(!active)}>
						<img src={dashboard_grey} alt="dashboard" className="navbar-icon"/>
					</Link>
				</div>
				<div className="sidebar-LinkButton">
					<Link to="/events" className={active ? "button-active" : "button-inactive"} onClick={() => setActive(!active)}>
						<img src={events_grey} alt="dashboard" className="navbar-icon"/>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
