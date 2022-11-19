import { FC, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import { QrReader, useQrReader, OnResultFunction } from "react-qr-reader";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { redirect } from "react-router-dom";
import {
  claimTicket,
  addToUserDatabase,
} from "../../models/Firebase/FirebaseModel";
import { User } from "firebase/auth";
import { increment } from "firebase/firestore";
const CryptoJS = require("crypto-js");

interface Props {
  user: User;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [data, setData] = useState("No result");
  const [prompt, setPrompt] = useState(false);
  const [company, setCompany] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    checkURL(data);
  }, []);

  const decryptWithAES = (ciphertext: any) => {
    const passphrase = process.env.REACT_APP_AC22_ENCRYPTKEY;
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  async function checkURL(url: string) {
    //Async await not working atm
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
      setTicket(urlSearchParams.get("ticketType")?.toString() ?? "");
      claimTicket(
        urlSearchParams.get("companyName")?.toString() ?? "",
        parseInt(urlSearchParams.get("ticketNr")?.toString() ?? "1")
      );
      resolve();
    });
  }

  function addTicketToDatabase(tickettype: string, company: string) {
    if (tickettype === "standardticket") {
      addToUserDatabase(
        props.user.uid,
        null,
        {
          nrOfTickets: increment(1),
        },
        company
      );
    } else {
      addToUserDatabase(
        props.user.uid,
        null,
        {
          nrOfSuperTickets: increment(1),
        },
        company
      );
    }
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(data);
  return (
    <div>
      <div className="scan-navbar">
        <NavBar
          name={["Malin", "Marques"]}
          title="<- Back"
          collectedTickets={10}
          qrButtonActive={false}
        />
      </div>
      <div className="scan-main">
        <QrReader
          className="scan-qr-reader"
          scanDelay={300}
          constraints={{
            facingMode: "environment",
          }}
          onResult={(result) => {
            if (!!result) {
              setPrompt(true);
              checkURL(result?.getText());
            }
            window.navigator.vibrate(100);
            setData(result?.getText() || "No result");
          }}
        />
        {prompt ? (
          <div className="success-prompt">
            <SuccessIcon />
            <div className="qr-text">Ticket Collected!</div>
            <AuthButton
              active={true}
              buttonText="great"
              buttonType="button"
              onButtonClick={() => {
                setPrompt(false);
                addTicketToDatabase(ticket, company.replace("@ac22.se", ""));
              }}
            ></AuthButton>
            <div className="qr-text">
              {capitalizeFirstLetter(company.replace("@ac22.se", ""))}
            </div>
            <div>{ticket}</div>
          </div>
        ) : (
          ""
        )}
        <div className="scan-text">
          Don't have an account? <a href="/Register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default ScanQrCodeView;
