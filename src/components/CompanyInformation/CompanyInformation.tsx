import React, { FC } from 'react'
import './CompanyInformation.css'

import CompanyInformationMini from '../CompanyInformationMini/CompanyInformationMini'

import { Coordinator, ExtraInfo } from '../../models/DummyModel'

/**
 * coordinators:    an array of the coordinators of the company
 * offerings:       an array of what the company has to offer
 * askAbout:        an array of what a student could ask about
 * extraInfo:       an array of extra information such as
 *                  whether food will be served or not
 */
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

        <CompanyInformationMini title="COMPANY" information={offerings}></CompanyInformationMini>

        <CompanyInformationMini title="ASK ABOUT" information={askAbout}></CompanyInformationMini>

        <div className='mini-flex'>
            <div className='title'>EXTRA INFORMATION</div>
            <div className='theme-flex no-border'>
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