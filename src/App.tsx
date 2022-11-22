import { FC, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import ScanQrCodePresenter from "./presenters/ScanQrCodePresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";
import CompanyTutorialPresenter from "./presenters/CompanyTutorialPresenter";
import ProfilePresenter from "./presenters/ProfilePresenter";

import CompanyView from "./views/CompanyView/CompanyView";
import { dummyCompanies } from "./models/ExhibitorConst";
import { dummyTickets } from "./models/dummyConstant";
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

  const onStar = (companyName: string) => userModel.toggleStar(companyName);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePresenter
              userModel={userModel}
              companies={dummyCompanies}
              tickets={dummyTickets}
              onStar={onStar}
              collectedTickets={userData?.collectedTickets.points}
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
              collectedTickets={userData?.points}
              name={["Malin", "Marques"]}
            />
          }
        />
        <Route path="/scanqrcode" element={<ScanQrCodePresenter />} />
        <Route
          path="/overview"
          element={
            <AllOrganisationPresenter
              userModel={userModel}
              companies={dummyCompanies}
              tickets={dummyTickets}
              onStar={onStar}
              collectedTickets={userData?.points}
              name={["Malin", "Marques"]}
            />
          }
        />
        <Route
          path="/company"
          element={
            <CompanyView
              userModel={userModel}
              companies={dummyCompanies}
              onStar={onStar}
              availableTickets={dummyTickets}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePresenter
              companies={dummyCompanies}
              tickets={dummyTickets}
              onStar={() => console.log("on-star")}
              collectedTickets={userData?.points}
              name={["Malin", "Marques"]}
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
