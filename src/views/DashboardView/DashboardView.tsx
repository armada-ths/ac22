import React, { FC } from 'react'
import './DashboardView.css'

import arrow_left from '../../assets/DashboardView/arrow-left.svg'
import arrow_right from '../../assets/DashboardView/arrow-right.svg'
import arrow_left_white from '../../assets/DashboardView/arrow-left-white.svg'
import arrow_right_white from '../../assets/DashboardView/arrow-right-white.svg'

import { Company, Tickets } from '../../models/DummyModel'

import CompanyCardsRow from '../../components/CompanyCardsRow/CompanyCardsRow'

interface Props {
    companies: Company[];
    onStar: () => void;
    availableTickets: Tickets[];
}

const DashboardView: FC<Props>= ({ companies, onStar, availableTickets }) =>{
  return (
    <div className='dashboard-container'>
    <div className='dashboard-sidebar'></div>
    <div className='dashboard-box'>
        <div className='dashboard-header'>
            <h1>Dashboard</h1>
            <div className='header-right'>
                <div className='tickets'>Tickets</div>
                <div className='scanner'>Scanner</div>
                <div className='profile'>Profile</div>
            </div>
        </div>

        <div className='dashboard-spotlight-container'>
            <div className='dashboard-spotlight'>
                <div className='spotlight-header'>
                    <span>SPOTLIGHT</span>
                    <div className='spotlight-right'>
                        <img src={arrow_left_white} alt={"arrow right starred page"}></img>
                        <img src={arrow_right_white} alt={"arrow right starred page"}></img>
                    </div>
                </div>
                <div className='spotlight-info'>
                    <h1>Company</h1>
                    <h2>Tags</h2>
                    <span>Date And Time</span>
                </div>
            </div>
        </div>

        <div className='fair-info'>
            <div className='your-tickets'></div>
            <div className='raffle'></div>
            <div className='event'></div>
        </div>

        <div className='company-cards-body'>
            <div className='company-cards-header'>
                <span>Your Starred Companies</span>
                <div>
                    <img src={arrow_left} alt={"arrow right starred page"}></img>
                    <img src={arrow_right} alt={"arrow right starred page"}></img>
                </div>
            </div>
            <CompanyCardsRow companies={companies} availableTickets={availableTickets} onStar={() => onStar()}></CompanyCardsRow>
        </div>
    </div>
    </div>
  )
}



export default DashboardView