import React, { FC } from "react";
import "./CompanyCard.css";

interface Props {
  image: string;
  companyName: string;
  starred: boolean;
  onStar: () => void;
}

const CompanyCards: FC<Props> = ({ image, companyName, starred, onStar }) => {
  const [star, setStar] = React.useState(starred);
  return (
    <div className="card-box">
        <div className="card-header-background" style={{backgroundColor: image}}></div>
        <div className="card-body">
          <div className="card-header">
            <div>
              <h1>{companyName}</h1>
              <h2>Tags</h2>
            </div>
            <div>
              <button className="card-star" onClick={() => {
                    onStar()
                    setStar(!star)}}>{star ? "Unstar" : "Star"}</button>
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

export default CompanyCards;
