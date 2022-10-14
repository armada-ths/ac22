import React, { FC } from 'react'
import './CompanyInformation.css'

type Coordinator = {
    name: string;
    mail: string;
}

interface Props {
    coordinators: Coordinator[];
    themes: string[];
    extraInformation: string[];
}

const CompanyInformation: FC<Props>= ({ coordinators, themes, extraInformation }) =>{
  return (
    <div className='company-info'>
        <div className='company-info-'>
            <div>EVENT COORDINATORS</div>
            {coordinators.map((coordinator) => {
                return (
                    <div>
                        <div>{coordinator.name}</div>
                        <div>{coordinator.mail}</div>
                    </div>
                )
            })}
        </div>
        <div>
            <div>THEMES AND TOPICS</div>
            {themes.map((theme) => {
                return (
                        <span className='company-info-span'>{theme}</span>
                )
            })}
        </div>
        <div>
            <div>EXTRA INFORMATION</div>
            {extraInformation.map((information) => {
                return (
                        <span className='company-info-span'>{information}</span>
                )
            })}
        </div>
    </div>
  )
}

export default CompanyInformation