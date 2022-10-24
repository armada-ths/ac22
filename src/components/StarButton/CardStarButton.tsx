import React, { FC } from 'react'
import './StarButton.css'

import star_img from '../../assets/StarButton/star-img.svg'

interface Props {
    starred: boolean;
    onStar: () => void;
}

const CardStarButton: FC<Props> = ({ starred, onStar, }) => {
  /*Use React Custom Hook?*/
  return (
    <div className="star-button card" onClick={() => onStar()}>
        <img src={star_img} width={24} height={24}></img>
    </div>
  )
}

export default CardStarButton