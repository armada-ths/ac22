import React, { FC } from 'react'
import './InfoLayout.css'

import location_img from '../../assets/InfoLayout/location-img.svg'
import stall_img from '../../assets/InfoLayout/stall-img.svg'

interface Props {
    title: string;
    info: any;
    icon: number; // Risky business?
}

const InfoLayout: FC<Props> = ({ title, info, icon }) => {
    const source = icon == 1 ? location_img : ( icon == 2 ? stall_img : "")
    return (
        <div className='header-info-box'>
            <img src={source}></img>
            <div className='header-info-mini-box'>
                <div className='title'>{title}</div>
                <div className='info'>{info}</div>
            </div>
        </div>
    )
}

export default InfoLayout