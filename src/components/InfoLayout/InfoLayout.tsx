import React, { FC } from 'react'
import './InfoLayout.css'

interface Props{
    title: string;
    info: string;
}
const InfoLayout: FC<Props> = ({ title, info }) => {
    return (
        <div className='info-layout-box'>
            <div className='title'>{title}</div>
            <div className='info'>{info}</div>
        </div>
    )
}

export default InfoLayout