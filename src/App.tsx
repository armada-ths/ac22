import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeViewer from "./views/Home";
import HomePresenter from "./presenters/HomePresenter";



function App() {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<HomePresenter placeholder="home"/>} />
      </Routes>
		</Router>
	);
}

export default App;
