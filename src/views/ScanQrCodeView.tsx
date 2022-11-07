import { FC } from "react";

interface Props {
	company: string;
	ticketPoints: string;
}

const ScanQrCodeView: FC<Props> = (props) => {
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}	
	return (
		<section>
			<h1>Grattis du har lyckats få {props.ticketPoints} poäng från {capitalizeFirstLetter(props.company)}</h1>
		</section>
	);
};

export default ScanQrCodeView;
