import { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateQrCodePresenter from "./presenters/CreateQrCodePresenter";
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
        <Route
          path="/tutorial-company"
          element={<CompanyTutorialPresenter />}
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
