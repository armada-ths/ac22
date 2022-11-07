import React, { FC, useEffect } from "react";
import QrCodeView from "../views/CreateQrCodeView";
import { addToCompanyDatabase, fetchFromDatabase } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

// To be used by Companies to create QR codes for their tickets

const QrCodePresenter: FC = (props) => {

	const redirectURL = "localhost:3000/scanqrcode";

	const [company, setCompany] = React.useState(""); 
	const [ticketType, setTicketType] = React.useState("standardticket"); 
	const [ticketPoints, setTicketPoints] = React.useState("3"); 
	const [ticketNr, setTicketNr] = React.useState(0); 
	const [isShown, setIsShown] = React.useState(false); 
	const [qrCode, setQrCode] = React.useState(window.location.href); 

	const encryptWithAES = (qrCode: string) => { 
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		return CryptoJS.AES.encrypt(qrCode, passphrase).toString();
	};

	function generateURL() { 
		const urlSearchParams = new URLSearchParams();
		urlSearchParams.append("companyName", company);
		urlSearchParams.append("ticketType", ticketType);
		urlSearchParams.append("ticketPoints", ticketPoints);
		urlSearchParams.append("ticketNr", ticketNr.toString());
		setTicketNr(ticketNr + 1);
		const encoded = encryptWithAES(urlSearchParams.toString());
		setQrCode(redirectURL + "#" + encoded);
		console.log("Generated URL: " + redirectURL + "#" + encoded);
	}

	return (
		<QrCodeView
			setCompany={setCompany} 
			setTicketType={setTicketType} 
			setTicketPoints={setTicketPoints} 
			setTicketNr={setTicketNr} 
			company={company} 
			ticketType={ticketType} 
			ticketPoints={ticketPoints} 
			ticketNr={ticketNr} 
			generateURL={generateURL} 
			isShown={isShown} 
			setIsShown={setIsShown} 
			qrCode={qrCode} 
			setQrCode={setQrCode} 
		/>
	);
};

export default QrCodePresenter;
