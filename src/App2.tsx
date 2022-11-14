import { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";

import CreateQrCodePresenter from "./presenters/CreateQrCodePresenter";
import ScanQrCodePresenter from "./presenters/ScanQrCodePresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

import CompanyView from "./views/CompanyView/CompanyView";
import { dummyCompanies, dummyTickets } from "./models/dummyConstant";
import { UserModel } from "./models/UserModel";
import AllOrganisationPresenter from "./presenters/AllOrganisationPresenter";
import { User } from "@firebase/auth";

interface Props {
  userModel: User;
}

const App2: FC<Props> = ({ userModel }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateQrCodePresenter user={userModel} />} />
        <Route path="*" element={<CreateQrCodePresenter user={userModel} />} />
      </Routes>
    </Router>
  );
};

export default App2;
