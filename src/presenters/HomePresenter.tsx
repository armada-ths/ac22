import React, { FC } from "react";
import { UserModel } from "../models/UserModel";
import HomeViewer from "../views/Home";

interface Props {
	placeholder?: string;
	model?: UserModel;
}

const HomePresenter: FC<Props> = ({model}) => {
	return <HomeViewer model={model}/>;
};

export default HomePresenter;
