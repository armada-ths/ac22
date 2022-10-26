import React, { FC } from 'react'
import './StarButton.css'

import star_img from '../../assets/StarButton/star-img.svg'

/**
 * starred: used to check whether the company is starred or not
 * onStar:  callback function that is called when the button is pressed
 */
interface Props {
    starred: boolean;
    onStar: () => void;
}

const StarButtonHeader: FC<Props> = ({ starred, onStar, }) => {
  return (
    <div>
        {starred &&
        <div className="star-button header starred" onClick={() => onStar()}>
            <img src={star_img}></img>
            <span>{starred ? "Unstar Company" : "Star Company"}</span>
        </div>
        
        ||
        
        <div className="star-button header unstarred" onClick={() => onStar()}>
            <img src={star_img}></img>
            <span>{starred ? "Unstar Company" : "Star Company"}</span>
        </div>}
    </div>
  )
}

export default StarButtonHeader