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
import App2 from "./App2";

import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./models/Firebase/firebaseConfig";
import { persistModelCompany } from "./models/Firebase/persistModelCompany";
import { CompanyUserModel } from "./models/companyUserModel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

auth.onAuthStateChanged(async (user) => {
  let isStudent;
  let companyLogo;
  if (user) {
    const docRef = doc(collection(database, "users"), user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        isStudent = docSnap.data().isStudent;
        if (!isStudent) companyLogo = docSnap.data().name;
      }
    } catch (e) {
      console.error("Error getting document:\n", e);
    }

    let userModel: UserModel = new UserModel(
      new Map<string, DbTicket>(),
      [],
      "",
      []
    );
    let companyModel: CompanyUserModel = new CompanyUserModel(
      user.email as string,
      companyLogo
    );
    if (isStudent) {
      persistModel(userModel);
    } else {
      persistModelCompany(companyModel);
    }

    root.render(
      <div>
        {
          /*user.email?.includes("ac22.se")*/ isStudent ? (
            <App userModel={userModel} user={user} />
          ) : (
            <App2 companyModel={companyModel} />
          )
        }
      </div>
      // <React.StrictMode> //Strict mode removed as it triggers useEffect twice

      // </React.StrictMode>
    );
  } else {
    root.render(
      // <React.StrictMode>
      <Router>
        <Routes>
          {/* <Route path="/createqrcode" element={<CreateQrCodePresenter />} /> */}
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
