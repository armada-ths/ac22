import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import TicketState from "./components/TicketState/TicketState"; // Remove

/**
 * You can use the code below to test the components
 * 
 * Keep in mind that the component will look better when it is in the card
 * since the sizing is relative to its parent element
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the import of TicketState
 * and the paths "available", "none-available" and "received"
 * these were only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/available" element={<TicketState
					ticketState="available"
					receivedTickets={0} />} />
				<Route path="/none-available" element={<TicketState
					ticketState="none available"
					receivedTickets={0} />} />
				<Route path="/received" element={<TicketState
					ticketState="received"
					receivedTickets={10} />} />
			</Routes>
		</Router>
	);
}

export default App;
