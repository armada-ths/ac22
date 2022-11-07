import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import Login from "./views/Login";
import CreateQrCodePresenter from "./presenters/CreateQrCodePresenter";
import ScanQrCodePresenter from "./presenters/ScanQrCodePresenter";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
				<Route
					path="/events"
					element={<EventsPresenter placeholder="events" />}
				/>
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/createqrcode"
					element={
						<CreateQrCodePresenter />
					}
				/>
				<Route
					path="/scanqrcode"
					element={
						<ScanQrCodePresenter />
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
