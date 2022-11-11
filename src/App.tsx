import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import CompanyView from "./views/CompanyView/CompanyView"; // Remove
import DashboardView from "./views/DashboardView/DashboardView"; // Remove
import {dummyCompanies, dummyTickets} from "./models/dummyConstant"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/dashboard" element={<DashboardView
					companies={dummyCompanies}
					onStar={() => console.log("on-star")}
					availableTickets={dummyTickets}  />} />
			</Routes>
		</Router>
	);
}

export default App;
