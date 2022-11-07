import React, { FC, useEffect } from "react";
import ScanQrCodeView from "../views/ScanQrCodeView";
import { addToCompanyDatabase, fetchFromDatabase } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

const QrCodePresenter: FC = (props) => {

	const [company, setCompany] = React.useState(""); 
	const [ticketType, setTicketType] = React.useState(""); 
	const [ticketPoints, setTicketPoints] = React.useState(""); 
	const [ticketNr, setTicketNr] = React.useState(0); 

	useEffect(() => {
		fetchQrCodeFromURL();
	}, []);

	const decryptWithAES = (ciphertext: any) => {
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
		const originalText = bytes.toString(CryptoJS.enc.Utf8);
		return originalText;
	};

	function fetchQrCodeFromURL() {
		const url = window.location.href;
		if (url.includes("#")) {
			const hash = url.substring(url.indexOf("#") + 1);
			const decoded = decryptWithAES(hash);
			const urlSearchParams = new URLSearchParams(decoded);
			setCompany(urlSearchParams.get("companyName")?.toString() ?? "");
			setTicketType(urlSearchParams.get("ticketType")?.toString() ?? "");
			setTicketPoints(urlSearchParams.get("ticketPoints")?.toString() ?? "");
			setTicketNr(parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "0"));
		}
	}

	return (
		<ScanQrCodeView 
			company={company}
			ticketPoints={ticketPoints}
		/>
	);
};

export default QrCodePresenter;
