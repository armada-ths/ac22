import { FC, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import ScanQrCodePresenter from "./presenters/ScanQrCodePresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";
import CompanyTutorialPresenter from "./presenters/CompanyTutorialPresenter";

import CompanyView from "./views/CompanyView/CompanyView";
import { dummyCompanies, dummyTickets } from "./models/dummyConstant";
import { UserModel } from "./models/UserModel";
import AllOrganisationPresenter from "./presenters/AllOrganisationPresenter";
import { auth } from "./models/Firebase/firebaseConfig";
import { getUserData } from "./models/Firebase/FirebaseModel";

interface Props {
  userModel: UserModel;
}

const App: FC<Props> = ({ userModel }) => {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    getUserData(auth.currentUser?.uid as string).then((data) => {
      setUserData(data);
    });
  }, []);

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
              collectedTickets={
                userData?.collectedTickets.nrOfSuperTickets +
                userData?.collectedTickets.nrOfTickets
              }
              name={["Malin", "Marques"]}
            />
          }
        />
        <Route
          path="/events"
          element={<EventsPresenter placeholder="events" />}
        />
        <Route
          path="/tutorial"
          element={
            <TutorialPresenter
              collectedTickets={
                userData?.collectedTickets.nrOfSuperTickets +
                userData?.collectedTickets.nrOfTickets
              }
              name={["Malin", "Marques"]}
            />
          }
        />
        <Route path="/scanqrcode" element={<ScanQrCodePresenter />} />
        <Route
          path="/overview"
          element={
            <AllOrganisationPresenter
              companies={dummyCompanies}
              tickets={dummyTickets}
              onStar={() => console.log("on-star")}
              collectedTickets={
                userData?.collectedTickets.nrOfSuperTickets +
                userData?.collectedTickets.nrOfTickets
              }
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

        <Route path="tutorial-company" element={<CompanyTutorialPresenter />} />

        <Route path="/" element={<RegisterPresenter registered={true} />} />
        <Route path="*" element={<RegisterPresenter registered={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
