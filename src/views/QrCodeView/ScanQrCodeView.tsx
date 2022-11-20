import { FC, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ScanQRCodeView.css";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { BarcodeScanner } from "react-barcode-qrcode-scanner";
import { TextResult } from "dynamsoft-javascript-barcode";
import { LoadingIcon } from "../../assets/LoadingIcon/Loading";
import { InvalidIcon } from "../../assets/Invalid/InvalidIcon";
import { auth } from "../../models/Firebase/firebaseConfig";

interface Props {
  company: string;
  fetchFromURL: (url: string) => Promise<boolean>;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [prompt, setPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketStatus, setTicketStatus] = useState(true);
  const [Initialized, setInitialized] = useState(false);
  const [isActive, setIsActive] = useState(true); //whether the camera is active
  const [isPause, setIsPause] = useState(false); //whether the video is paused
  const [runtimeSettings, setRuntimeSettings] = useState(
    '{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'
  ); //use JSON template to decode QR codes only

  async function onScanned(results: TextResult[]) {
    if (results.length > 0) {
      setIsActive(false);
      window.navigator.vibrate(100);
      setTicketStatus(
        (await props.fetchFromURL(results[0].barcodeText)) as any
      );

      setPrompt(true);
    }
  }

  const onOpened = (cam: HTMLVideoElement, camLabel: string) => {
    // You can access the video element in the onOpened event
    //console.log("opened");
  };

  const onClosed = () => {
    //console.log("closed");
  };

  //DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNDc0MjQwLVRYbFhaV0pRY205cVgyUmljZyIsIm9yZ2FuaXphdGlvbklEIjoiMTAxNDc0MjQwIiwiY2hlY2tDb2RlIjo3NDQ2ODI4MDd9

  const onInitialized = () => {
    // when the Barcode Reader is initialized
    setInitialized(true);
  };

  return (
    <div>
      <div className="scan-navbar">
        <NavBar
          name={["", auth.currentUser?.displayName as string]}
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
            facingMode="environment"
            onInitialized={onInitialized}
            interval={2000}
            onOpened={onOpened}
            onClosed={onClosed}
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
              <InvalidIcon />
              <div className="qr-text-already">Ticket already claimed!</div>
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
        <div className="scan-text">Scan QR Code to collect your ticket</div>
      </div>
    </div>
  );
};

export default ScanQrCodeView;
