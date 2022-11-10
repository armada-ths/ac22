import React, { FC, useEffect } from "react";
import ScanQrCodeView from "../views/ScanQrCodeView";
import { claimTicket } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

const QrCodePresenter: FC = (props) => {
	const [company, setCompany] = React.useState("");
	const [ticketType, setTicketType] = React.useState("");
	const [ticketPoints, setTicketPoints] = React.useState("");
	const [ticketNr, setTicketNr] = React.useState(0);

	useEffect(() => {
		checkURL();
	}, []);

	const decryptWithAES = (ciphertext: any) => {
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
		const originalText = bytes.toString(CryptoJS.enc.Utf8);
		return originalText;
	};

	async function checkURL() {
		const url = window.location.href;
		if (url.includes("#")) {
			await fetchFromURL(url);
			// claimTicket(company, ticketType, ticketNr); // Better fix to be implemented here
		}
	}

	function fetchFromURL(url: string) {
		return new Promise<void>((resolve) => {
			const hash = url.substring(url.indexOf("#") + 1);
			const decoded = decryptWithAES(hash);
			const urlSearchParams = new URLSearchParams(decoded);
			setCompany(urlSearchParams.get("companyName")?.toString() ?? "");
			setTicketType(urlSearchParams.get("ticketType")?.toString() ?? "");
			setTicketPoints(urlSearchParams.get("ticketPoints")?.toString() ?? "");
			setTicketNr(parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "0"));
			claimTicket(
				urlSearchParams.get("companyName")?.toString() ?? "",
				urlSearchParams.get("ticketType")?.toString() ?? "",
				urlSearchParams.get("ticketPoints")?.toString() ?? "",
				parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "0")
			); //Ugly fix as the state is not updated in time
			resolve();
		});
	}

	return <ScanQrCodeView company={company} ticketPoints={ticketPoints} />;
};

export default QrCodePresenter;
