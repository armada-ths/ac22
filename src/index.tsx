import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./models/Firebase/firebaseConfig";

import LoginPresenter from "./presenters/LoginPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import { UserModel, DbTicket } from "./models/UserModel";
import { persistModel } from "./models/Firebase/persistModel";
import CreateQrCodePresenter from "./presenters/CreateQrCodePresenter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

auth.onAuthStateChanged((user) => {
  if (user) {
    const userModel = new UserModel(new Map<string, DbTicket>(), [], "", []);
    persistModel(userModel);

    root.render(
      // <React.StrictMode> //Strict mode removed as it triggers useEffect twice
      <App userModel={userModel} />
      // </React.StrictMode>
    );
  } else {
    root.render(
      // <React.StrictMode>
      <Router>
        <Routes>
          {/* Remove this later ------ */}
          @Todo remove this later
          <Route path="/createqrcode" element={<CreateQrCodePresenter />} />
          <Route
            path="/register"
            element={<RegisterPresenter registered={false} />}
          />
          <Route path="/" element={<LoginPresenter />} />
          <Route path="*" element={<LoginPresenter />} />
        </Routes>
      </Router>
      // </React.StrictMode>
    );
  }
});
