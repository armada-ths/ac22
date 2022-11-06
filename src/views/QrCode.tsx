import React, { FC, useEffect } from "react";
import QRCode from "react-qr-code";

interface Props {
	setCompany: (company: string) => void;
	setTicketType: (ticketType: string) => void;
	setTicketPoints: (ticketPoints: string) => void;
	setTicketNr: (ticketNr: number) => void;
	company: string;
	ticketType: string;
	ticketPoints: string;
	ticketNr: number;
	generateURL: () => string;
}

const QrCodeView: FC<Props> = (props) => {
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
			<button
				id="generateTicket"
				onClick={() => {
					console.log("http://localhost:3000/qrcode#" + props.generateURL());
					props.setTicketNr(props.ticketNr + 1);
				}}>
				Create Ticket
			</button>

			<div id="qrCodeContainer"></div>
		</section>
	);
};

export default QrCodeView;
