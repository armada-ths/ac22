import React, { FC } from "react";
import QrCodeView from "../views/QrCode";

const QrCodePresenter: FC = (props) => {

	const [qrCode, setQrCode] = React.useState("");

    return(
        <QrCodeView
            setQrCode={setQrCode}
        /> 
    );  
}

export default QrCodePresenter;