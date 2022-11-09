import { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";

import CompanyView from "./views/CompanyView/CompanyView";
import { dummyCompanies, dummyTickets } from './models/dummyConstant'
import { UserModel } from "./models/UserModel";

interface Props {
	userModel: UserModel;
}

const App: FC<Props> = ({userModel}) => {
	return (
	  <Router>
		<Routes>
		  <Route path="/" element={<HomePresenter placeholder="home" model={userModel} />} />
		  <Route path="/events" element={<EventsPresenter placeholder="events" />} />
		  <Route path="/tutorial" element={<TutorialPresenter />} />

		  <Route path="/company" element={<CompanyView
					companies={dummyCompanies}
					currentCompany={0}
					onStar={() => console.log("on-star")}
					availableTickets={dummyTickets} />} />
		</Routes>
	  </Router>
	);
}

export default App;