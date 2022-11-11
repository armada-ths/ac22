import React, { FC, useEffect } from "react";
import ScanQrCodeView from "../views/ScanQrCodeView";
import { claimTicket } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

const QrCodePresenter: FC = (props) => {
	const [company, setCompany] = React.useState("");
	const [ticketPoints, setTicketPoints] = React.useState("");

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
		//Async await not working atm
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
			setTicketPoints(urlSearchParams.get("ticketPoints")?.toString() ?? "");
			claimTicket(
				urlSearchParams.get("companyName")?.toString() ?? "",
				parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "1")
			); //Ugly fix as the state is not updated in time
			resolve();
		});
	}

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return <ScanQrCodeView company={capitalizeFirstLetter(company)} ticketPoints={ticketPoints} />;
};

export default QrCodePresenter;