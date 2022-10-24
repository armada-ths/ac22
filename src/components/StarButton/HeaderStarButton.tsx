import React, { FC } from 'react'
import './StarButton.css'

import star_img from '../../assets/StarButton/star-img.svg'

interface Props {
    starred: boolean;
    onStar: () => void;
}

const HeaderStarButton: FC<Props> = ({ starred, onStar, }) => {
  /*Use React Custom Hook?*/
  return (
    <div className="star-button header" onClick={() => onStar()}>
        <img src={star_img}></img>
        <span>{starred ? "Unstar Company" : "Star Company"}</span>
    </div>
  )
}

export default HeaderStarButton