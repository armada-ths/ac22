import React, { FC } from "react";
import "./CompanyHeader.css";

import StarButtonHeader from "../StarButton/StarButtonHeader";
import CompanyHeaderBox from "../CompanyHeaderBox/CompanyHeaderBox";

import location_img from "../../assets/CompanyHeader/location-img.svg";
import stall_img from "../../assets/CompanyHeader/stall-img.svg";
import ticket_img from "../../assets/CompanyHeader/ticket-img.svg";

/**
 * location:    location of stall
 * stall:       number of the stall
 * tickets:     number of tickets left
 * starred:     used to check whether the company is starred or not
 * onStar:      callback function that is called when the button is pressed
 */
interface Props {
  companyName: string;
  location: string;
  stall: number;
  tickets: number;
  starred: boolean;
  onStar: (companyName: string) => void;
}

const CompanyHeader: FC<Props> = ({
  companyName,
  location,
  stall,
  tickets,
  starred,
  onStar,
}) => {
  return (
    <div className="header-container">
      <CompanyHeaderBox
        img={location_img}
        icon="location"
        title="LOCATION"
        info={location}
      ></CompanyHeaderBox>
      <div className="line"></div>
      <CompanyHeaderBox
        img={stall_img}
        icon="stall"
        title="STALL"
        info={"#" + stall}
      ></CompanyHeaderBox>
    </div>
  );
};

export default CompanyHeader;
