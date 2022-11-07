import React, { FC } from "react";
import Countdown from "../components/Countdown/Countdown";
interface Props {
}

const HomeViewer: FC<Props> = () => {
	return <div>Home page
		<div>
			<Countdown today={Date.now()}/>
		</div>
	</div>;
};

export default HomeViewer;
