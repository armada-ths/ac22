import React, { FC } from "react";
import "./StarButton.css";

import star_img from "../../assets/StarButton/star-img.svg";

/**
 * starred: used to check whether the company is starred or not
 * onStar:  callback function that is called when the button is pressed
 */
interface Props {
  companyName: string;
  starred: boolean;
  onStar: (copanyName: string) => void;
}

const StarButtonHeader: FC<Props> = ({ companyName, starred, onStar }) => {
  const [star, setStar] = React.useState(starred);

  function onClick() {
    onStar(companyName);
    setStar(!star);
  }

  return (
    <div>
      {(star && (
        <div className="star-button header starred" onClick={() => onClick()}>
          <img src={star_img} alt={"star button header starred"}></img>
          <span>{star ? "Unstar Company" : "Star Company"}</span>
        </div>
      )) || (
        <div className="star-button header unstarred" onClick={() => onClick()}>
          <img src={star_img} alt={"star button header unstarred"}></img>
          <span>{star ? "Unstar Company" : "Star Company"}</span>
        </div>
      )}
    </div>
  );
};

export default StarButtonHeader;
