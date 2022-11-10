import React, { FC, useEffect } from "react";
import QrCodeView from "../views/CreateQrCodeView";
import { addToDB, getCompanyData, removeFromDB } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

// To be used by Companies to create QR codes for their tickets

const QrCodePresenter: FC = (props) => {
	useEffect(() => {
		getCompanyData(company).then((data) => {
			if (data !== undefined) {
				setTicketNr(data.TotalTickets + 1);
				console.log("Setting ticketnr to " + (data.TotalTickets + 1));
			}
		});
	}, []);

	const redirectURL = "localhost:3000/scanqrcode";

	const [company, setCompany] = React.useState("thsarmada"); //This should be set by the company from company login
	const [ticketType, setTicketType] = React.useState("standardticket");
	const [ticketPoints, setTicketPoints] = React.useState(3);
	const [ticketNr, setTicketNr] = React.useState(1);
	const [isShown, setIsShown] = React.useState(false);
	const [qrCode, setQrCode] = React.useState(window.location.href);

	const encryptWithAES = (qrCode: string) => {
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		return CryptoJS.AES.encrypt(qrCode, passphrase).toString();
	};

	async function generateURL() {
		const urlSearchParams = new URLSearchParams();
		urlSearchParams.append("companyName", company);
		urlSearchParams.append("ticketType", ticketType);
		urlSearchParams.append("ticketPoints", ticketPoints.toString());
		urlSearchParams.append("ticketNr", ticketNr.toString());
		setTicketNr(ticketNr + 1);
		const encoded = encryptWithAES(urlSearchParams.toString());
		setQrCode(redirectURL + "#" + encoded);
		console.log("Generated URL: " + redirectURL + "#" + encoded);
		addTicketToDatabase();
	}

	function addTicketToDatabase() {
		console.log("addTicketToDatabase: " + ticketNr);
		addToDB("companies", company, { ticketType, ticketNr, ticketPoints });
	}

	function removePreviousQrCode(){
		let ticket = "Ticket " + (ticketNr - 1);
		setTicketNr(ticketNr - 1);
		removeFromDB("companies", company, ticket);
	}

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<QrCodeView
			setTicketType={setTicketType}
			setTicketPoints={setTicketPoints}
			company={capitalizeFirstLetter(company)}
			ticketType={ticketType}
			ticketPoints={ticketPoints}
			generateURL={generateURL}
			isShown={isShown}
			setIsShown={setIsShown}
			qrCode={qrCode}
			setQrCode={setQrCode}
			removePreviousQrCode={removePreviousQrCode}
		/>
	);
};

export default QrCodePresenter;
