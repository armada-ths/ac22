import { FC } from "react";

interface Props {
	company: string;
	ticketPoints: string;
}

const ScanQrCodeView: FC<Props> = (props) => {
	return (
		<section>
			<h1>Grattis du har lyckats få {props.ticketPoints} poäng från {props.company}</h1>
		</section>
	);
};

export default ScanQrCodeView;
