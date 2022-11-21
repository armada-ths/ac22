import React, { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import armada_logo from "../../assets/Sidebar-pics/armada-logo.svg";
import "./Sidebar.css";
import { auth } from "../../models/Firebase/firebaseConfig";
import { UserModel } from "../../models/UserModel";

interface Props {
  placeholder?: string;
  model?: UserModel;
}

/*
 Dependencies: Armada Logo, Dashboard Icon, Events Icon
	@returns: Sidebar component
	This component is the sidebar navigation which is seen on the homepage and eventspage
*/

const Sidebar: FC<Props> = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar-container">
      <div className="armada-logo">
        <img className="armada-logo-img" src={armada_logo} alt="Armada Logo" />
      </div>
      <div className="sidebar-button-container">
        <div
          className={
            active === "/"
              ? "sidebar-dashboard"
              : "sidebar-dashboard-inactive"
          }
        >
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#333333"
              stroke="#333333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.33333 12.3333H1.33333C1.24493 12.3333 1.16014 12.2982 1.09763 12.2357C1.03512 12.1732 1 12.0884 1 12V1.33333C1 1.24493 1.03512 1.16014 1.09763 1.09763C1.16014 1.03512 1.24493 1 1.33333 1H9.33333C9.42174 1 9.50652 1.03512 9.56904 1.09763C9.63155 1.16014 9.66667 1.24493 9.66667 1.33333V12C9.66667 12.0884 9.63155 12.1732 9.56904 12.2357C9.50652 12.2982 9.42174 12.3333 9.33333 12.3333ZM1.09763 22.9024C1.03512 22.8399 1 22.7551 1 22.6667V17.3333C1 17.2449 1.03512 17.1601 1.09763 17.0976C1.16014 17.0351 1.24493 17 1.33333 17H9.33333C9.42174 17 9.50652 17.0351 9.56904 17.0976C9.63155 17.1601 9.66667 17.2449 9.66667 17.3333V22.6667C9.66667 22.7551 9.63155 22.8399 9.56904 22.9024C9.50653 22.9649 9.42174 23 9.33333 23H1.33333C1.24493 23 1.16014 22.9649 1.09763 22.9024ZM14.431 22.9024C14.3685 22.8399 14.3333 22.7551 14.3333 22.6667V13.3333C14.3333 13.2449 14.3685 13.1601 14.431 13.0976C14.4935 13.0351 14.5783 13 14.6667 13H22.6667C22.7551 13 22.8399 13.0351 22.9024 13.0976C22.9649 13.1601 23 13.2449 23 13.3333V22.6667C23 22.7551 22.9649 22.8399 22.9024 22.9024C22.8399 22.9649 22.7551 23 22.6667 23H14.6667C14.5783 23 14.4935 22.9649 14.431 22.9024ZM22.6667 8.33333H14.6667C14.5783 8.33333 14.4935 8.29821 14.431 8.2357C14.3685 8.17319 14.3333 8.0884 14.3333 8V1.33333C14.3333 1.24493 14.3685 1.16014 14.431 1.09763C14.4935 1.03512 14.5783 1 14.6667 1H22.6667C22.7551 1 22.8399 1.03512 22.9024 1.09763C22.9649 1.16014 23 1.24493 23 1.33333V8C23 8.08841 22.9649 8.17319 22.9024 8.2357C22.8399 8.29821 22.7551 8.33333 22.6667 8.33333Z" />
            </svg>
          </Link>
        </div>
        <div
          className={
            active === "/overview"
              ? "sidebar-events"
              : "sidebar-dashboard-inactive"
          }
        >
          <Link to="/overview">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#333333"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.496 13.994C6.89303 13.994 7.2738 13.8363 7.55454 13.5555C7.83528 13.2748 7.993 12.894 7.993 12.497C7.993 12.1 7.83528 11.7192 7.55454 11.4385C7.2738 11.1577 6.89303 11 6.496 11C6.09897 11 5.7182 11.1577 5.43746 11.4385C5.15672 11.7192 4.999 12.1 4.999 12.497C4.999 12.894 5.15672 13.2748 5.43746 13.5555C5.7182 13.8363 6.09897 13.994 6.496 13.994ZM7.994 17.498C7.994 17.895 7.83628 18.2758 7.55554 18.5565C7.2748 18.8373 6.89403 18.995 6.497 18.995C6.09997 18.995 5.7192 18.8373 5.43846 18.5565C5.15772 18.2758 5 17.895 5 17.498C5 17.101 5.15772 16.7202 5.43846 16.4395C5.7192 16.1587 6.09997 16.001 6.497 16.001C6.89403 16.001 7.2748 16.1587 7.55554 16.4395C7.83628 16.7202 7.994 17.101 7.994 17.498ZM12 13.992C12.3968 13.992 12.7773 13.8344 13.0578 13.5538C13.3384 13.2733 13.496 12.8928 13.496 12.496C13.496 12.0992 13.3384 11.7187 13.0578 11.4382C12.7773 11.1576 12.3968 11 12 11C11.603 11 11.2222 11.1577 10.9415 11.4385C10.6607 11.7192 10.503 12.1 10.503 12.497C10.503 12.894 10.6607 13.2748 10.9415 13.5555C11.2222 13.8363 11.603 13.994 12 13.994V13.992ZM13.498 17.496C13.498 17.893 13.3403 18.2738 13.0595 18.5545C12.7788 18.8353 12.398 18.993 12.001 18.993C11.604 18.993 11.2232 18.8353 10.9425 18.5545C10.6617 18.2738 10.504 17.893 10.504 17.496C10.504 17.099 10.6617 16.7182 10.9425 16.4375C11.2232 16.1567 11.604 15.999 12.001 15.999C12.398 15.999 12.7788 16.1567 13.0595 16.4375C13.3403 16.7182 13.498 17.099 13.498 17.496ZM17.498 13.992C17.895 13.992 18.2758 13.8343 18.5565 13.5535C18.8373 13.2728 18.995 12.892 18.995 12.495C18.995 12.098 18.8373 11.7172 18.5565 11.4365C18.2758 11.1557 17.895 10.998 17.498 10.998C17.101 10.998 16.7202 11.1557 16.4395 11.4365C16.1587 11.7172 16.001 12.098 16.001 12.495C16.001 12.892 16.1587 13.2728 16.4395 13.5535C16.7202 13.8343 17.101 13.992 17.498 13.992ZM24 5C24 3.67392 23.4732 2.40215 22.5355 1.46447C21.5979 0.526784 20.3261 0 19 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V19C0 20.3261 0.526784 21.5979 1.46447 22.5355C2.40215 23.4732 3.67392 24 5 24H19C20.3261 24 21.5979 23.4732 22.5355 22.5355C23.4732 21.5979 24 20.3261 24 19V5ZM2 8H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V8ZM5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V6H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2Z" />
            </svg>
          </Link>
        </div>
        <div
          className={
            active === "/tutorial"
              ? "sidebar-active"
              : "sidebar-inactive"
          }
        >
          <Link to="/tutorial" className="sidebar-tutorial">
            ?
          </Link>
        </div>

        <div className="logout">
          <div onClick={() => auth.signOut()}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 2.66667C25 1.2 23.8 0 22.3333 0H11.6667V2.66667H22.3333V21.3333H11.6667V24H22.3333C23.8 24 25 22.8 25 21.3333V2.66667ZM6.09867 10.6667L9.48 7.28533L7.59467 5.4L0.994667 12L7.59467 18.6L9.48 16.7147L6.09867 13.3333H14.88V10.6667H6.09867Z"
                fill="#DB2B2B"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
