import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import AllCards from './components/AllCards' // Remove

/**
 * You can use the code below to test the cards
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the import of AllCards
 * and the file src/components/AllCards.tsx
 * and the path "cards"
 * these were only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/cards" element={<AllCards placeholder="" />} />
			</Routes>
		</Router>
	);
}

export default App;
