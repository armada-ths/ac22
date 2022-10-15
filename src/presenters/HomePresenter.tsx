import React, { FC } from "react";
import Sidebar from "../components/Sidebar";
import HomeViewer from "../views/Home";

import "./Presenter.css"

interface Props {
	placeholder?: string;
}

const HomePresenter: FC<Props> = () => {
	return (
		<div className="mainFlex">
      <Sidebar/>
			<HomeViewer />
		</div>
	);
};

export default HomePresenter;
