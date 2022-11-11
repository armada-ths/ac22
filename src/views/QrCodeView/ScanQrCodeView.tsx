import { FC } from "react";

interface Props {
	company: string;
}

const ScanQrCodeView: FC<Props> = (props) => {
	return (
		<section>
			<h1>Grattis du har lyckats få en ticket från {props.company}</h1>
		</section>
	);
};

export default ScanQrCodeView;
