import React, { FC } from 'react'
import NavBarTicket from '../NavBarTicket/NavBarTicket';
import qrImg from "../../assets/NavBar/qrcode-img.svg"
import { Link } from "react-router-dom";
import './NavBar.css'

interface Props {
    collectedTickets: number;
    name: String[];
    title: String;
}
const NavBar: FC<Props> = ({name, title, collectedTickets}) => {
    function toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return(
        <div className='navbar-base'>
            <h1 onClick={()=>toTop()}>{title}</h1>
            <div className='navbar-right'>
                <NavBarTicket collectedTickets={collectedTickets}/>
                <Link to="/scanqrcode" className='navbar-qr'> <img src={qrImg}/></Link>
                <Link to="/profile" className='navbar-name'>{name[1]}</Link>
                <Link to="/tutorial" className='navbar-tutorial'>?</Link>
            </div>
        </div>
    )
}
export default NavBar