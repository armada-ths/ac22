import { FC, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ScanQRCodeView.css";
import AuthButton from "../../components/AuthButton/AuthButton";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import { BarcodeScanner } from "react-barcode-qrcode-scanner";
import { TextResult } from "dynamsoft-javascript-barcode";
import { LoadingIcon } from "../../assets/LoadingIcon/Loading";
import { InvalidIcon } from "../../assets/Invalid/InvalidIcon";
import { auth } from "../../models/Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../models/Firebase/FirebaseModel";

interface Props {
  company: string;
  fetchFromURL: (url: string) => Promise<boolean>;
  setStallRating: (rating: number) => void;
  setExperienceRating: (rating: number) => void;
  sendSurvey: () => void;
}

const ScanQrCodeView: FC<Props> = ({
  company,
  fetchFromURL,
  setStallRating,
  setExperienceRating,
  sendSurvey,
}) => {
  const [userData, setUserData] = useState<any>();
  const [prompt, setPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketStatus, setTicketStatus] = useState(true);
  const [Initialized, setInitialized] = useState(false);
  const [isActive, setIsActive] = useState(true); //whether the camera is active
  const [isPause] = useState(false); //whether the video is paused
  const [runtimeSettings] = useState(
    '{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'
  ); //use JSON template to decode QR codes only

  useEffect(() => {
    getUserData(auth.currentUser?.uid as string).then((data) => {
      setUserData(data);
    });
  }, [prompt]);

  // async function getTickets(userid: string) {
  //   let totaltickets: number = await getUserTickets(userid);
  //   console.log(totaltickets);
  //   setTickets(totaltickets);
  //   return totaltickets;
  // }

  async function onScanned(results: TextResult[]) {
    if (results.length > 0) {
      setLoading(true);
      setIsActive(false);
      setTicketStatus((await fetchFromURL(results[0].barcodeText)) as any);
      setPrompt(true);
      setLoading(false);
    }
  }

  const navigate = useNavigate();

  const onInitialized = () => {
    // when the Barcode Reader is initialized
    setInitialized(true);
  };

  return (
    <div>
      <div className="scan-navbar">
        <svg
          className="scan-back-button"
          onClick={() => {
            setIsActive(false);
            navigate(-1);
          }}
          width="52"
          height="31"
          viewBox="0 0 52 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 13.5C51.1046 13.5 52 14.3954 52 15.5C52 16.6046 51.1046 17.5 50 17.5V13.5ZM0.585785 16.9142C-0.195263 16.1332 -0.195263 14.8668 0.585785 14.0858L13.3137 1.35786C14.0948 0.576816 15.3611 0.576816 16.1421 1.35786C16.9232 2.13891 16.9232 3.40524 16.1421 4.18629L4.82843 15.5L16.1421 26.8137C16.9232 27.5948 16.9232 28.8611 16.1421 29.6421C15.3611 30.4232 14.0948 30.4232 13.3137 29.6421L0.585785 16.9142ZM50 17.5H2V13.5H50V17.5Z"
            fill="#0F1322"
          />
        </svg>

        <NavBar
          name={[
            "",
            (auth.currentUser?.email as string).replace("@kth.se", ""),
          ]}
          title=""
          collectedTickets={userData?.points}
          qrButtonActive={false}
        />
      </div>
      <div className="scan-main">
        <div className="scan-camera">
          <BarcodeScanner
            isActive={isActive}
            isPause={isPause}
            drawOverlay={false}
            license="DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNDc0MjQwLVRYbFhaV0pRY205cVgyUmljZyIsIm9yZ2FuaXphdGlvbklEIjoiMTAxNDc0MjQwIiwiY2hlY2tDb2RlIjo3NDQ2ODI4MDd9"
            desiredCamera="back"
            desiredResolution={{ width: 1280, height: 720 }}
            runtimeSettings={runtimeSettings}
            onScanned={onScanned}
            facingMode="environment"
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

              <label className="ratings-label">
                How was {company}'s stall on a scale from 1 to 10?
              </label>
              <select
                placeholder={"Choose rating..."}
                onChange={(e) => setStallRating(parseInt(e.target.value))}
                className="rating-select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                  return (
                    <option value={number} className="rating-text">
                      {number}
                    </option>
                  );
                })}
              </select>
              <label className="ratings-label">
                How satisfied were you with your experience at the stall on a
                scale from 1 to 10?
              </label>
              <select
                placeholder={"Choose rating..."}
                onChange={(e) => setExperienceRating(parseInt(e.target.value))}
                className="rating-select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                  return (
                    <option value={number} className="rating-text">
                      {number}
                    </option>
                  );
                })}
              </select>

              <AuthButton
                active={true}
                buttonText="great"
                buttonType="button"
                onButtonClick={() => {
                  setPrompt(false);
                  setIsActive(true);
                  sendSurvey();
                }}
              ></AuthButton>
            </div>
          ) : (
            <div className="success-prompt">
              <InvalidIcon />
              <div className="qr-text-already">Ticket already claimed!</div>
              <AuthButton
                active={true}
                buttonText="oh no!"
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
        <div className="scan-text">Scan the QR Code to collect your ticket</div>
      </div>
    </div>
  );
};

export default ScanQrCodeView;
