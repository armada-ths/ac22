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

const StarButtonCard: FC<Props> = ({ starred, onStar, }) => {
  return (
    <div>
        {starred &&
        <div className="star-button card starred" onClick={() => onStar()}>
            <img src={star_img} width={24} height={24}></img>
        </div>

        ||

        <div className="star-button card unstarred" onClick={() => onStar()}>
            <img src={star_img} width={24} height={24}></img>
        </div>}
    </div>
  )
}

export default StarButtonCard