import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePresenter from "./presenters/HomePresenter";
import CompanyPresenter from "./presenters/CompanyPresenter";

import { dummyModel } from './models/dummyConst'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePresenter placeholder="home"/>}/>
        <Route path="/company" element={<CompanyPresenter model={dummyModel}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
