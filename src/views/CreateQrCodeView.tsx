import { FC, useEffect } from "react";
import QRCode from "react-qr-code";

interface Props {
	setCompany: (company: string) => void;
	setTicketType: (ticketType: string) => void;
	setTicketPoints: (ticketPoints: string) => void;
	setTicketNr: (ticketNr: number) => void;
	setIsShown: (isShown: boolean) => void;
	setQrCode: (qrCode: string) => void;
	company: string;
	ticketType: string;
	ticketPoints: string;
	ticketNr: number;
	isShown: boolean;
	qrCode: string;
	generateURL: () => void;
}

const CreateQrCodeView: FC<Props> = (props) => {
	useEffect(() => {
		document.getElementById("generateTicket")?.setAttribute("disabled", "true");
	}, []);

	function checkCompanyName(params: string) {
		if (params.length > 0) {
			props.setCompany(params.toLocaleLowerCase());
			document.getElementById("generateTicket")?.removeAttribute("disabled");
		} else {
			document
				.getElementById("generateTicket")
				?.setAttribute("disabled", "true");
		}
	}

	const handleClick = () => {
		props.setIsShown(true);
		props.generateURL();
	};

	return (
		<section>
			<div>Generate QRCode</div>
			<input
				type="text"
				placeholder="Company Name"
				onChange={(e) => {
					checkCompanyName(e.target.value);
				}}></input>
			<select
				name="tickettype"
				onChange={(e) => {
					props.setTicketType(e.target.value);
				}}>
				<option value="standardticket">Standard Ticket</option>
				<option value="superticket">Super Ticket</option>
			</select>
			<select
				name="ticketpoints"
				onChange={(e) => {
					props.setTicketPoints(e.target.value);
				}}>
				<option value="3">3 points</option>
				<option value="5">5 points</option>
				<option value="10">10 points</option>
			</select>
			<button id="generateTicket" onClick={handleClick}>
				Create Ticket
			</button>

			<div id="qrCodeContainer">
				{props.isShown && (
					<div
						style={{
							height: "auto",
							margin: "0 auto",
							maxWidth: 256,
							width: "100%",
						}}>
						<QRCode
							size={256}
							style={{ height: "auto", maxWidth: "100%", width: "100%" }}
							value={props.qrCode}
							viewBox={`0 0 256 256`}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default CreateQrCodeView;
