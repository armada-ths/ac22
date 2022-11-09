import React, { FC } from 'react'

interface Props {
    title: string;
    information: string[];
}

export const CompanyInformationMini: FC<Props> = ({ title, information }) => {
    return (
    <div className='mini-flex'>
        <div className='title'>{title}</div>
        <div className="theme-flex">
        {information.map((info) => {
            return (
                    <span className="theme border" key={info}>{info}</span>
            )
        })}
        </div>
    </div>
    )
}

export default CompanyInformationMini