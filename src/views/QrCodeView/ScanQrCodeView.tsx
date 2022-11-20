import { FC, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { BarcodeScanner } from "react-barcode-qrcode-scanner";
import { TextResult } from "dynamsoft-javascript-barcode";

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

  const onDeviceListLoaded = (devices: MediaDeviceInfo[]) => {
    //console.log(devices);
  };

  const onScanned = (results: TextResult[]) => {
    if (results.length > 0) {
      setPrompt(true);
      setIsPause(true);
      window.navigator.vibrate(100);
      props.fetchFromURL(results[0].barcodeText);
    }
  };

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
        {/* <QrReader
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
				/> */}
        {prompt ? (
          props.ticketStatus === true ? (
            <div className="success-prompt">
              <SuccessIcon />
              <div className="qr-text">Ticket Collected!</div>
              <AuthButton
                active={true}
                buttonText="great"
                buttonType="button"
                onButtonClick={() => {
                  setPrompt(false);
                  setIsPause(false);
                }}
              ></AuthButton>
              <div className="qr-text">
                {capitalizeFirstLetter(company.replace("@ac22.se", ""))}
              </div>
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
                  setIsPause(false);
                }}
              ></AuthButton>
              <div className="qr-text">
                {capitalizeFirstLetter(company.replace("@ac22.se", ""))}
              </div>
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
