import React, { FC } from "react";
import RaffleCountdown from "../components/RaffleCountdown/RaffleCountdown";
import TicketCounter from "../components/TicketCounter/TicketCounter";
interface Props {
}

const HomeViewer: FC<Props> = () => {
	return <div>Home page
		<div>
			<RaffleCountdown/>
			<TicketCounter tickets={50}/>
		</div>
	</div>;
};

export default HomeViewer;
