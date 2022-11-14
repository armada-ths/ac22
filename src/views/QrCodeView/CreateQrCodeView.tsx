import { FC, useEffect } from "react";
import QRCode from "react-qr-code";
import "./CreateQRCodeView.css";

interface Props {
  setTicketType: (ticketType: string) => void;
  setIsShown: (isShown: boolean) => void;
  setQrCode: (qrCode: string) => void;
  company: string;
  ticketType: string;
  isShown: boolean;
  qrCode: string;
  generateURL: () => void;
  removePreviousQrCode: () => void;
}

const CreateQrCodeView: FC<Props> = (props) => {
  const handleClick = () => {
    props.setIsShown(true);
    props.generateURL();
  };

  return (
    <div className="qr-container">
      <div className="main-content">
        <div className="company-name">Generate QRCode for {props.company}</div>
        <div className="ticket">
          <select
            name="tickettype"
            onChange={(e) => {
              props.setTicketType(e.target.value);
              props.setIsShown(false);
            }}
          >
            <option value="standardticket">Standard Ticket</option>
            <option value="superticket">Super Ticket</option>
          </select>
        </div>

        <button onClick={handleClick}>Create Ticket</button>

        <div id="qrCodeContainer">
          {props.isShown && (
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 256,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={props.qrCode}
                viewBox={`0 0 256 256`}
              />

              <h3>
                {props.ticketType}
              </h3>

              <div>
                <button
                  onClick={() => {
                    props.removePreviousQrCode();
                    props.setIsShown(false);
                  }}
                >
                  Remove This QRCode
                </button>
                <h5>Only use this if ticket has not yet been scanned!</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQrCodeView;
