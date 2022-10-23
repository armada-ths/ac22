import React, { FC } from 'react'
import './CompanyInformation.css'

import { Coordinator } from '../../models/DummyModel'
import { ExtraInfo } from '../../models/DummyModel'

interface Props {
    coordinators: Coordinator[];
    offerings: string[];
    askAbout: string[];
    extraInfo: ExtraInfo[];
}

const CompanyInformation: FC<Props> = ({ coordinators, offerings, askAbout, extraInfo }) => {
  return (
    <div className='company-info'>
        <div className='mini-flex'>
            <div className='title'>EVENT COORDINATORS</div>
            <div className='company-coordinator-box'>
            {coordinators.map((coordinator) => {
                return (
                    <div className='company-coordinator'>
                        <img src={coordinator.img}></img>
                        <div key={coordinator.name}>
                            <div className='name'>{coordinator.name}</div>
                            <div className='mail'>{coordinator.mail}</div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        <div className='mini-flex'>
            <div className='title'>COMPANY</div>
            <div className='mini-flex2'>
            {offerings.map((offer) => {
                return (
                        <span className='theme border' key={offer}>{offer}</span>
                )
            })}
            </div>
        </div>
        <div className='mini-flex'>
            <div className='title'>ASK ABOUT</div>
            <div className='mini-flex2'>
                {askAbout.map((theme) => {
                    return (
                            <span className='theme border' key={theme}>{theme}</span>
                    )
                })}
            </div>
        </div>
        <div className='mini-flex'>
            <div className='title'>EXTRA INFORMATION</div>
            <div className='mini-flex2 no-border'>
                {extraInfo.map((information) => {
                    return (
                        <div>
                            <img src={information.img}></img>
                            <span className='theme' key={information.info}>{information.info}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CompanyInformation