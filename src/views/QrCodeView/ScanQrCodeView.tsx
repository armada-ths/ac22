import { FC, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import { QrReader, useQrReader, OnResultFunction } from "react-qr-reader";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
const CryptoJS = require("crypto-js");

interface Props {
  company: string;
  fetchFromURL: (url: string) => void;
  ticketStatus: boolean;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [data, setData] = useState("No result");
  const [prompt, setPrompt] = useState(false);
  const [company, setCompany] = useState("");
 

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
              props.fetchFromURL(result?.getText());
            }
            window.navigator.vibrate(100);
            setData(result?.getText() || "No result");
          }}
        />
        {prompt && props.ticketStatus ? (
          <div className="success-prompt">
            <SuccessIcon />
            <div className="qr-text">Ticket Collected!</div>
            <AuthButton
              active={true}
              buttonText="great"
              buttonType="button"
              onButtonClick={() => {
                setPrompt(false);
                // addTicketToDatabase(ticket);
              }}
            ></AuthButton>
            <div className="qr-text">
              {capitalizeFirstLetter(company.replace("@ac22.se", ""))}
            </div>
            {/* <div>{ticket}</div> */}
          </div>
        ) : (
          <div className="qr-text">Ticket already claimed!</div>
        )}
        <div className="scan-text">
          Don't have an account? <a href="/Register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default ScanQrCodeView;
