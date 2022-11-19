import React, { FC, useEffect } from "react";
import ScanQrCodeView from "../views/QrCodeView/ScanQrCodeView";
import { claimTicket } from "../models/Firebase/FirebaseModel";
import { User } from "firebase/auth";
const CryptoJS = require("crypto-js");

interface props {
  user: User;
}

const QrCodePresenter: FC<props> = ({ user }) => {
  return <ScanQrCodeView user={user} />;
};

export default QrCodePresenter;
