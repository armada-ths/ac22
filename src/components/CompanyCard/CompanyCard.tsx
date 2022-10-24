import React, { FC } from "react";
import "./CompanyCard.css";

import CardStarButton from '../StarButton/CardStarButton'

interface Props {
  image: string;
  companyName: string;
  starred: boolean;
  onStar: () => void;
}

/*Having trouble setting the backgroundImage*/
const CompanyCard: FC<Props> = ({ image, companyName, starred, onStar }) => {
  return (
    <div className="card-box">
        <div className="card-background-image" style={{backgroundColor: image}}></div>
        <div className="card-body">
          <div className="card-header">
            <div>
              <h1>{companyName}</h1>
              <h2>Tags</h2>
            </div>
            <div>
              <CardStarButton starred={starred} onStar={() => onStar()}></CardStarButton>
            </div>
          </div>

          <div className="card-tickets">
            <div>SUPER TICKETS</div>
            <div>AVAILABLE</div>
          </div>
        </div>
    </div>
  );
};

export default CompanyCard;