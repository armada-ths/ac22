import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import StarButtonCard from "./components/StarButton/StarButtonCard"; // Remove
import StarButtonHeader from "./components/StarButton/StarButtonHeader"; // Remove

/**
 * You can use the code below to test the buttons
 * 
 * Keep in mind that the header button will look better when it is in the header
 * since the width is set as a percentage
 * I put 15vw when trying it out in the header which looked good
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the imports of StarButtonCard and StarButtonHeader
 * and the paths star-button-card and star-button-header
 * these were only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/star-button-card" element={<StarButtonCard 
					starred={true} onStar={() => console.log("star-button-card")}/>}></Route>
				<Route path="/star-button-header" element={<StarButtonHeader 
					starred={false} onStar={() => console.log("star-button-header")}/>}></Route>
			</Routes>
		</Router>
	);
}

export default App;