import { FC, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import { QrReader, useQrReader, OnResultFunction } from "react-qr-reader";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { setDefaultEventParameters } from "firebase/analytics";
import { wait } from "@testing-library/user-event/dist/utils";
import { InvalidTicket } from "../../assets/InvalidTicket/InvalidTicket";

interface Props {
  company: string;
  fetchFromURL: (url: string) => void;
  ticketStatus: boolean;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [prompt, setPrompt] = useState(false);
  const [scanDelay, setscanDelay] = useState(3000);
  const [ticketClaimed, setTicketClaimed] = useState(!props.ticketStatus); //if status is true, ticket is unclaimed

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(!props.ticketStatus, "heyy");
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
          scanDelay={scanDelay}
          constraints={{
            facingMode: "environment",
          }}
          onResult={(result) => {
            setTimeout(() => {}, 10000);
            if (!!result) {
              window.navigator.vibrate(3);
              setTimeout(() => {}, 10000);
              setscanDelay(8000);
              setPrompt(true);
              props.fetchFromURL(result?.getText());
            }
          }}
        />
        {prompt ? (
          props.ticketStatus === true ? (
            <div className="success-prompt">
              <SuccessIcon />
              <div className="qr-text">Ticket claimed!</div>
              <AuthButton
                active={true}
                buttonText="great"
                buttonType="button"
                onButtonClick={() => {
                  window.navigator.vibrate(3);
                  setPrompt(false);
                  setscanDelay(3000);
                }}
              ></AuthButton>
            </div>
          ) : (
            <div className="success-prompt">
              <InvalidTicket />
              <div className="qr-text">Ticket already claimed!</div>
              <AuthButton
                active={true}
                buttonText="oh no!"
                buttonType="button"
                onButtonClick={() => {
                  window.navigator.vibrate(3);
                  setPrompt(false);
                  setscanDelay(3000);
                }}
              ></AuthButton>
            </div>
          )
        ) : null}

        <div className="scan-text">Scan the QR code to claim the ticket</div>
      </div>
    </div>
  );
};

export default ScanQrCodeView;
