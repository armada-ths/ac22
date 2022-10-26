import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import CompanyView from "./views/CompanyView/CompanyView"; // Remove

import { dummyCompanies, dummyTickets } from './models/dummyConstant' // Remove

/**
 * You can use the code below to test the view
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the import of CompanyView and dummyConstant
 * and the path to company-view
 * this was only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/company-header" element={<CompanyView
					companies={dummyCompanies}
					currentCompany={0}
					onStar={() => console.log("on-star")}
					availableTickets={dummyTickets} />} />
			</Routes>
		</Router>
	);
}

export default App;
