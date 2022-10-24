import React, { FC } from 'react'
import './HeaderStarButton.css'

import star_img from '../../assets/CompanyView/star-img.svg'

interface Props {
    onStar: () => void;
    setStar: () => void;
    star: boolean;
}

const Component: FC<Props> = ({ onStar, setStar, star }) => {
  const [className, setClassName] = React.useState(star);
  return (
    <div className={new String("header-star-button ").concat(star.toString())} onClick={() => {
            onStar()
            setStar()}}>
        <img src={star_img}></img>
        <span>{star ? "Unstar Company" : "Star Company"}</span>
    </div>
  )
}

export default Component