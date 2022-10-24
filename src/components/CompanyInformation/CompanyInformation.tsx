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
        <div className='mini-flex'>
            <div className='title'>EVENT COORDINATORS</div>
            {coordinators.map((coordinator) => {
                return (
                    <div>
                        <div className='name'>{coordinator.name}</div>
                        <div className='mail'>{coordinator.mail}</div>
                    </div>
                )
            })}
        </div>
        <div className='mini-flex'>
            <div className='title'>THEMES AND TOPICS</div><div>
            {themes.map((theme) => {
                return (
                        <span className='theme'>{theme}</span>
                )
            })}</div>
        </div>
        <div className='mini-flex'>
            <div className='title'>EXTRA INFORMATION</div><div>
            {extraInformation.map((information) => {
                return (
                        <span className='theme'>{information}</span>
                )
            })}</div>
        </div>
    </div>
  )
}

export default CompanyInformation