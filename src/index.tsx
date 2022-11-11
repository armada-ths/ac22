import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./models/Firebase/firebaseConfig"

import LoginPresenter from './presenters/LoginPresenter';
import RegisterPresenter from './presenters/RegisterPresenter';
import { UserModel, DbTicket } from './models/UserModel';
import { persistModel } from './models/Firebase/persistModel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

auth.onAuthStateChanged((user) => {
  if(user) {

    const userModel = new UserModel(new Map<string, DbTicket>(), [], "", []);
    persistModel(userModel);

    root.render(
      <React.StrictMode>
        <App userModel={userModel} />
      </React.StrictMode>)
  }
  else {
    root.render(
      <React.StrictMode>
        <Router>
		      <Routes>
            <Route path="/register" element={<RegisterPresenter />} />
            <Route path="/" element={<LoginPresenter />} />
          </Routes>
	      </Router>
      </React.StrictMode>)
  }
})
