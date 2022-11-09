import React, { FC } from "react";
import { auth } from "../models/Firebase/firebaseConfig";
import { UserModel } from "../models/UserModel";

interface Props {
	model?: UserModel;
}

const HomeViewer: FC<Props> = ({model}) => {
	return (
		<div>
			<button onClick={() => auth.signOut()}>Log Out</button>
			<button onClick={() => {model?.addCompany("Ninas Company")}}>Star</button>
			<button onClick={() => {model?.removeCompany("Ninas Company")}}>Unstar</button>
			<button onClick={() => {model?.toggleStar("Ninas Company")}}>Toggle Star</button>
		</div>);
};

export default HomeViewer;
