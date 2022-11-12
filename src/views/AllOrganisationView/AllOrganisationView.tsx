import React, { FC } from 'react'
import './AllOrganisationView.css'
import { Company, Tickets } from '../../models/DummyModel'
import CompanyCardsRow from '../../components/CompanyCardsRow/CompanyCardsRow'
import Sidebar from '../../components/Sidebar/Sidebar'

interface Props {
    companies: Company[];
    onStar: () => void;
    availableTickets: Tickets[];
}

const AllOrganisationView: FC<Props> = ({ companies, onStar, availableTickets }) => {

    return (
        <div>
            <div className='sidebar-position'><Sidebar /></div>
            <div className='inner-box'>
                <h1> All Organisations</h1>
                <div className='card-flex'>
                    <div className='row'><CompanyCardsRow  companies={companies} availableTickets={availableTickets} onStar={() => onStar()} a={0}/></div>
                    <div className='row'><CompanyCardsRow companies={companies} availableTickets={availableTickets} onStar={() => onStar()} a={3}/></div>
                    <div className='row'><CompanyCardsRow companies={companies} availableTickets={availableTickets} onStar={() => onStar()} a={6}/></div>
                    <div className='row'><CompanyCardsRow companies={companies} availableTickets={availableTickets} onStar={() => onStar()} a={9}/></div>
                    <div className='row'><CompanyCardsRow companies={companies} availableTickets={availableTickets} onStar={() => onStar()} a={12}/></div>
                </div>
            </div>
        </div>
    )
}



export default AllOrganisationView

