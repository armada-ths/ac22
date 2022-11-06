import React, { FC } from "react";
import QrCodeView from "../views/QrCode";
import { addToDatabase, fetchFromDatabase } from "../components/FirebaseModel";
const CryptoJS = require("crypto-js");

const QrCodePresenter: FC = (props) => {

	const [company, setCompany] = React.useState("");
	const [ticketType, setTicketType] = React.useState("standardticket");
	const [ticketPoints, setTicketPoints] = React.useState("3");
    const [ticketNr, setTicketNr] = React.useState(0);

	const encryptWithAES = (qrCode: string) => {
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		return CryptoJS.AES.encrypt(qrCode, passphrase).toString();
	};

	const decryptWithAES = (ciphertext: any) => {
		const passphrase = "testphrase"; // Needs to be kept secret and changed somewhere else before production
		const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
		const originalText = bytes.toString(CryptoJS.enc.Utf8);
		return originalText;
	};

	function generateURL() {
		const urlSearchParams = new URLSearchParams();
		urlSearchParams.append("companyName", company);
		urlSearchParams.append("ticketType", ticketType);
		urlSearchParams.append("ticketPoints", ticketPoints);
		urlSearchParams.append("ticketNr", ticketNr.toString());
		console.log("urlSearchParams: " + urlSearchParams.toString());
		const encoded = encryptWithAES(urlSearchParams.toString());
		console.log("encoded: " + encoded);
		const decoded = decryptWithAES(encoded);
		console.log("decoded: " + decoded);
		return encoded;
	}

    return(
        <QrCodeView
        setCompany={setCompany}
        setTicketType={setTicketType}
        setTicketPoints={setTicketPoints}
        setTicketNr={setTicketNr}
        company = {company}
        ticketType = {ticketType}
        ticketPoints = {ticketPoints}
        ticketNr = {ticketNr}
        generateURL = {generateURL}
        /> 
    );  
}

export default QrCodePresenter;