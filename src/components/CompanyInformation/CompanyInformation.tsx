import React, { FC } from 'react'
import './CompanyInformation.css'

import CompanyInfo from '../CompanyInfo/CompanyInfo'

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
                    <div className='company-coordinator' key={coordinator.name}>
                        <img src={coordinator.img}></img>
                        <div>
                            <div className='name'>{coordinator.name}</div>
                            <div className='mail'>{coordinator.mail}</div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        <CompanyInfo title="COMPANY" information={offerings}></CompanyInfo>
        <CompanyInfo title="ASK ABOUT" information={askAbout}></CompanyInfo>
        <div className='mini-flex'>
            <div className='title'>EXTRA INFORMATION</div>
            <div className='mini-mini-flex no-border'>
                {extraInfo.map((information) => {
                    return (
                        <div key={information.info}>
                            <img src={information.img}></img>
                            <span className='theme'>{information.info}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CompanyInformation