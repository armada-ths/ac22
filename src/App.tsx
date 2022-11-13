import { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import all presenters here
import HomePresenter from "./presenters/HomePresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import CreateQrCodePresenter from "./presenters/CreateQrCodePresenter";
import ScanQrCodePresenter from "./presenters/ScanQrCodePresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import ProfilePresenter from "./presenters/ProfilePresenter";
import CompanyView from "./views/CompanyView/CompanyView";
import { dummyCompanies, dummyTickets } from "./models/dummyConstant";
import { UserModel } from "./models/UserModel";
import AllOrganisationPresenter from "./presenters/AllOrganisationPresenter";

interface Props {
	userModel: UserModel;
}

const App: FC<Props> = ({ userModel }) => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<HomePresenter
							companies={dummyCompanies}
							tickets={dummyTickets}
							onStar={() => console.log("on-star")}
							collectedTickets={15}
							name={["Malin", "Marques"]}
						/>
					}
				/>
				<Route
					path="/tutorial"
					element={
						<TutorialPresenter
							collectedTickets={15}
							name={["Malin", "Marques"]}
						/>
					}
				/>
				<Route path="/createqrcode" element={<CreateQrCodePresenter />} />
				<Route path="/scanqrcode" element={<ScanQrCodePresenter />} />
				<Route
					path="/overview"
					element={
						<AllOrganisationPresenter
							companies={dummyCompanies}
							tickets={dummyTickets}
							onStar={() => console.log("on-star")}
							collectedTickets={15}
							name={["Malin", "Marques"]}
						/>
					}
				/>
				<Route
					path="/company"
					element={
						<CompanyView
							companies={dummyCompanies}
							currentCompany={0}
							onStar={() => console.log("on-star")}
							availableTickets={dummyTickets}
						/>
					}
				/>
				<Route
					path="/register"
					element={<RegisterPresenter registered={true} />}
				/>
				<Route
					path="/profile"
					element={
						<ProfilePresenter
							companies={dummyCompanies}
							tickets={dummyTickets}
							onStar={() => console.log("on-star")}
							collectedTickets={15}
							name={["Malin", "Marques"]}
						/>
					}
				/>
				<Route path="*" element={<RegisterPresenter registered={true} />} />
			</Routes>
		</Router>
	);
};

export default App;
