import React, { FC, useEffect } from "react";
import ScanQrCodeView from "../views/QrCodeView/ScanQrCodeView";
import { claimTicket } from "../models/Firebase/FirebaseModel";
import { auth } from "../models/Firebase/firebaseConfig";

const CryptoJS = require("crypto-js");

const QrCodePresenter: FC = (props) => {
	const [company, setCompany] = React.useState("");

	useEffect(() => {
		checkURL();
	}, []);

	const decryptWithAES = (ciphertext: any) => {
		const passphrase = process.env.REACT_APP_AC22_ENCRYPTKEY;
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
			claimTicket(
				auth.currentUser?.uid ?? "",
				urlSearchParams.get("ticketType")?.toString() ?? "",
				urlSearchParams.get("companyName")?.toString() ?? "",
				parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "1")
			).then((e) => {
				alert(e);
			}); //Ugly fix as the state is not updated in time
			resolve();
		});
	}

	function sanitize(string: string) {
		return (
			string.charAt(0).toUpperCase() +
			string.substring(0, string.indexOf("@")).slice(1)
		);
	}

	return (
		<ScanQrCodeView company={sanitize(company)} fetchFromURL={fetchFromURL} />
	);
};

export default QrCodePresenter;
