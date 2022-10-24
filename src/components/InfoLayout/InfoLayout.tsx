import React, { FC } from 'react'
import './InfoLayout.css'

import location_img from '../../assets/InfoLayout/location-img.svg'
import stall_img from '../../assets/InfoLayout/stall-img.svg'

interface Props {
    title: string;
    info: any;
    icon: number; // Risky business
}

const InfoLayout: FC<Props> = ({ title, info, icon }) => {
    return (
        <div className='info-layout-box'>
            {icon == 1 && <img src={location_img}></img> || icon == 2 && <img src={stall_img}></img> || icon == 3}
            <div className='info-layout-mini-box'>
                <div className='title'>{title}</div>
                <div className='info'>{info}</div>
            </div>
        </div>
    )
}

export default InfoLayout