import React, { FC } from "react";
import NavBarTicket from "../NavBarTicket/NavBarTicket";
import qrImg from "../../assets/NavBar/qrcode-img.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

interface Props {
  collectedTickets: number;
  name: String[];
  title: String;
  qrButtonActive: boolean;
}

const NavBar: FC<Props> = ({
  name,
  title,
  collectedTickets,
  qrButtonActive,
}) => {
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="navbar-base">
      <h1
        onClick={() =>
          location.pathname === "/scanqrcode" ? navigate(-1) : toTop()
        }
      >
        {title}
      </h1>
      <div className="navbar-right">
        <NavBarTicket collectedTickets={collectedTickets} />
        <Link
          to="/scanqrcode"
          className={qrButtonActive ? "navbar-qr" : "navbar-qr-hide"}
        >
          <img src={qrImg} alt="qr" />
        </Link>
        <Link to="/profile" className="navbar-name">
          {name[1]}
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
