import { FC, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { BarcodeScanner } from "react-barcode-qrcode-scanner";
import { TextResult } from "dynamsoft-javascript-barcode";
import { LoadingIcon } from "../../components/LoadingIcon/Loading";

interface Props {
  company: string;
  fetchFromURL: (url: string) => Promise<boolean>;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [data, setData] = useState("No result");
  const [prompt, setPrompt] = useState(false);
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [ticketStatus, setTicketStatus] = useState(true);

  const [Initialized, setInitialized] = useState(false);
  const [isActive, setIsActive] = useState(true); //whether the camera is active
  const [isPause, setIsPause] = useState(false); //whether the video is paused
  const [runtimeSettings, setRuntimeSettings] = useState(
    '{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'
  ); //use JSON template to decode QR codes only
  const onOpened = (cam: HTMLVideoElement, camLabel: string) => {
    // You can access the video element in the onOpened event
    //console.log("opened");
  };

  const onClosed = () => {
    //console.log("closed");
  };

  async function onScanned(results: TextResult[]) {
    if (results.length > 0) {
      setLoading(true);
      setIsActive(false);
      window.navigator.vibrate(100);
      setTicketStatus(
        (await props.fetchFromURL(results[0].barcodeText)) as any
      );
      setLoading(false);
      setPrompt(true);
    }
  }

  const onClicked = (result: TextResult) => {
    // when a barcode overlay is clicked
    alert(result.barcodeText);
  };

  const onInitialized = () => {
    // when the Barcode Reader is initialized
    setInitialized(true);
  };

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
        <div className="scan-camera">
          <BarcodeScanner
            isActive={isActive}
            isPause={isPause}
            drawOverlay={false}
            desiredCamera="back"
            desiredResolution={{ width: 1280, height: 720 }}
            runtimeSettings={runtimeSettings}
            onScanned={onScanned}
            onClicked={onClicked}
            facingMode="environment"
            onOpened={onOpened}
            onClosed={onClosed}
            onInitialized={onInitialized}
            interval={2000}
          ></BarcodeScanner>
        </div>
        {loading ? (
          <div className="success-prompt-loading">
            <LoadingIcon />
          </div>
        ) : (
          ""
        )}
        {prompt ? (
          ticketStatus === true ? (
            <div className="success-prompt">
              <SuccessIcon />
              <div className="qr-text">Ticket Collected!</div>
              <AuthButton
                active={true}
                buttonText="great"
                buttonType="button"
                onButtonClick={() => {
                  setPrompt(false);
                  setIsActive(true);
                }}
              ></AuthButton>
            </div>
          ) : (
            <div className="success-prompt">
              <div className="qr-text">Ticket already collected!</div>
              <AuthButton
                active={true}
                buttonText="great"
                buttonType="button"
                onButtonClick={() => {
                  setPrompt(false);
                  setIsActive(true);
                }}
              ></AuthButton>
            </div>
          )
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
