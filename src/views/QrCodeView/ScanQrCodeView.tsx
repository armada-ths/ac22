import { FC, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import { QrReader, useQrReader, OnResultFunction } from "react-qr-reader";

interface Props {
  company: string;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [data, setData] = useState("No result");

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
            if (result) {
              alert(result);
            }
            window.navigator.vibrate(100);
            setData(result?.getText() || "No result");
            // if (result) {
            //   console.log(result);
            // } else {
            //   console.log(error);
            // }
          }}
        />
      </div>
    </div>
  );
};

export default ScanQrCodeView;
