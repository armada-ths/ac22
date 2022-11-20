import React, { FC, useEffect } from "react";
import QrCodeView from "../views/QrCodeView/CreateQrCodeView";
import { CompanyUserModel } from "../models/companyUserModel";
import {
	addToDB,
	getCompanyData,
	removeFromDB,
} from "../models/Firebase/FirebaseModel";
// import { User } from "@firebase/auth";
const CryptoJS = require("crypto-js");

// To be used by Companies to create QR codes for their tickets

interface props {
	user: CompanyUserModel;
}

const QrCodePresenter: FC<props> = ({ user }) => {
	useEffect(() => {
		getCompanyData(company).then((data) => {
			if (data !== undefined) {
				setTicketNr(data.TotalTickets + 1);
				setSuperTicketsLeft(data.SuperTicketsLeft);
			}
		});
	}, []);

	// const redirectURL = "localhost:3000/scanqrcode";

	const [company, setCompany] = React.useState(user.email as string); //This should be set by the company from company login
	const [ticketType, setTicketType] = React.useState("standardticket");
	const [ticketNr, setTicketNr] = React.useState(1);
	const [superTicketsLeft, setSuperTicketsLeft] = React.useState(10);
	const [isShown, setIsShown] = React.useState(false);
	const [qrCode, setQrCode] = React.useState(window.location.href);

	const encryptWithAES = (qrCode: string) => {
		const passphrase = process.env.REACT_APP_AC22_ENCRYPTKEY;
		return CryptoJS.AES.encrypt(qrCode, passphrase).toString();
	};

	async function generateURL() {
		const redirectURL = window.location.href;
		const urlSearchParams = new URLSearchParams();
		urlSearchParams.append("companyName", company);
		urlSearchParams.append("ticketType", ticketType);
		urlSearchParams.append("ticketNr", ticketNr.toString());
		setTicketNr(ticketNr + 1);
		const encoded = encryptWithAES(urlSearchParams.toString());
		setQrCode(redirectURL + "scanqrcode#" + encoded);
		addTicketToDatabase();
		console.log(redirectURL + "scanqrcode#" + encoded); //For debugging
	}

	function addTicketToDatabase() {
		addToDB("companies", company, { ticketType, ticketNr });
		if (ticketType === "superticket") {
			setSuperTicketsLeft(superTicketsLeft - 1);
		}
	}

	function removePreviousQrCode() {
		let ticket = "Ticket " + (ticketNr - 1);
		setTicketNr(ticketNr - 1);
		removeFromDB("companies", company, ticket);
		if (ticketType === "superticket") {
			setSuperTicketsLeft(superTicketsLeft + 1);
		}
	}

	function sanitize(string: string) {
		return (
			string.charAt(0).toUpperCase() +
			string.substring(0, string.indexOf("@")).slice(1)
		);
	}

	return (
		<QrCodeView
			setTicketType={setTicketType}
			company={sanitize(company)}
			ticketType={ticketType}
			generateURL={generateURL}
			isShown={isShown}
			setIsShown={setIsShown}
			qrCode={qrCode}
			setQrCode={setQrCode}
			removePreviousQrCode={removePreviousQrCode}
			companyLogo={user.name}
			superTicketsLeft={superTicketsLeft}
		/>
	);
};

export default QrCodePresenter;
