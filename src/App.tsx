import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
			</Routes>
		</Router>
	);
}

export default App;
