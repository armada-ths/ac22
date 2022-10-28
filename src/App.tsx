import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import CompanyHeader from "./components/CompanyHeader/CompanyHeader"; // Remove

/**
 * You can use the code below to test the buttons
 * 
 * Keep in mind that the header will look better when it is in the view
 * since the width is set as a percentage
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the import of CompanyHeader
 * and the path to company-header
 * this was only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/company-header" element={<CompanyHeader
					location={"Nya Matsalen, Nymble"}
					stall={50}
					tickets={30}
					starred={false}
					onStar={() => console.log("on-star")} />} />
			</Routes>
		</Router>
	);
}

export default App;