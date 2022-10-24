import React, { FC } from 'react'
import './CompanyInfo.css'

interface Props {
    title: string;
    information: any[];
}

const CompanyInfo: FC<Props> = ({ title, information }) => {
    return (
    <div className='mini-flex'>
        <div className='title'>{title}</div>
        <div className="mini-mini-flex">
        {information.map((info) => {
            return (
                    <span className="theme border" key={info}>{info}</span>
            )
        })}
        </div>
    </div>
    )
}

export default CompanyInfo