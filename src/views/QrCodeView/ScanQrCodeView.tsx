import { FC, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../DashboardView/DashboardView";
import "./ScanQRCodeView.css";
import { QrReader } from "react-qr-reader";

interface Props {
  company: string;
}

const ScanQrCodeView: FC<Props> = (props) => {
  const [data, setData] = useState("No result");
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
          constraints={{
            facingMode: "user",
          }}
          videoContainerStyle={{ borderRaduis: "100px" }}
          onResult={function noRefCheck() {}}
        />
      </div>
    </div>
  );
};

export default ScanQrCodeView;
