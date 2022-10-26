import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

 /**REMOVE FROM HERE*/
 import CompanyInformation from "./components/CompanyInformation/CompanyInformation";

import lunch_img from './assets/CompanyInformation/lunch-img.svg'
import waitlist_img from './assets/CompanyInformation/waitlist-img.svg'

let coordinators = [{name: "Nina", mail: "nina@mail.se", img: "null"}, {name: "Malin", mail: "malin@mail.se", img: "null"}]
let offerings = ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"]
let askAbout = ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"]
let extraInfo =[{info: "Lunch Provided", img: lunch_img}, {info: "Waitlist Available", img: waitlist_img}]
/**REMOVE TO HERE*/

/**
 * You can use the code below to test the components
 * 
 * Keep in mind that the component will look better when it is in the card
 * since the sizing is relative to its parent element
 * 
 * Remove this comment before merging (if merging) to main
 * and also remove the path "company-information"
 * this was only set up to try out the component
 */
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePresenter placeholder="home" />} />
        		<Route path="/events" element={<EventsPresenter placeholder="events" />} />
				<Route path="/register" element={<RegisterPresenter />} />
				<Route path="/company-info" element={<CompanyInformation
					coordinators={coordinators}
					offerings={offerings}
					askAbout={askAbout}
					extraInfo={extraInfo} />} />
			</Routes>
		</Router>
	);
}

export default App;
