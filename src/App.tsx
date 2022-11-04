import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import EventsPresenter from "./presenters/EventsPresenter";
import RegisterPresenter from "./presenters/RegisterPresenter";
import LoginPresenter from "./presenters/LoginPresenter";
import TutorialPresenter from "./presenters/TutorialPresenter";

//const myModel = 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePresenter placeholder="home" />} />
        <Route
          path="/events"
          element={<EventsPresenter placeholder="events" />}
        />
        <Route path="/register" element={<RegisterPresenter />} />
        <Route path="/login" element={<LoginPresenter />} />
        <Route path="/tutorial" element={<TutorialPresenter />} />
      </Routes>
    </Router>
  );
}

export default App;
