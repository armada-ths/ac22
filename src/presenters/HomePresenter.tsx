import React, { FC } from "react";
import HomeViewer from "../views/Home";

interface Props {
	placeholder?: string;
}

const HomePresenter: FC<Props> = () => {
	return <HomeViewer/>;
};

export default HomePresenter;
