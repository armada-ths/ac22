import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import CompanyCard from "./components/CompanyCard/CompanyCard"; // Remove

/**
 * You can use the code below to test the buttons
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the import of CompanyCard
 * and the paths available, none-available and received
 * these were only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/available" element={<CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"available"}
					receivedTickets={0} />} />
				<Route path="/none-available" element={<CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"none available"}
					receivedTickets={0} />} />
				<Route path="/received" element={<CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"received"}
					receivedTickets={10} />} />
			</Routes>
		</Router>
	);
}

export default App;
