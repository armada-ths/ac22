import { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
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

import { CompanyUserModel } from "./models/companyUserModel";
import CompanyTutorialPresenter from "./presenters/CompanyTutorialPresenter";

interface Props {
  companyModel: CompanyUserModel;
}

const App2: FC<Props> = ({ companyModel }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CreateQrCodePresenter user={companyModel} />}
        />
        <Route path="/tutorial-company"
        element={
          <CompanyTutorialPresenter/>
        }
        />
        <Route
          path="*"
          element={<CreateQrCodePresenter user={companyModel} />}
        />
      </Routes>
    </Router>
  );
};

export default App2;
