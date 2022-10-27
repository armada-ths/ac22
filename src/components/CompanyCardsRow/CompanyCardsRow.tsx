import React, { FC } from 'react'
import './CompanyCardsRow.css'

import CompanyCard from '../CompanyCard/CompanyCard'
import { Company, Tickets } from '../../models/DummyModel'

/**
 * companies:        an array of companies that is used to display the cards
 * onStar:           callback function that is called when the star button is pressed
 * availableTickets: an array of the available number of tickets left for each company
 */
interface Props {
    companies: Company[];
    availableTickets: Tickets[];
    onStar: () => void;
}

const CompanyCardsRow: FC<Props>= ({ companies, availableTickets, onStar }) =>{
  return (
    <div className='company-cards'>
        {companies.slice(0, 4).map((company) => {
        let ticketState = company.collectedTickets > 0 ? "received" : availableTickets[company.id].nrOfTickets > 0 ? "available" : "none available";
            return (
                <div key={company.name} className="company-card">
                    <CompanyCard
                        image={"rgb(18, 18, 71)"}
                        companyName={company.name}
                        tags={company.tags}
                        starred={company.starred}
                        onStar={() => onStar()}
                        ticketState={ticketState}
                        receivedTickets={company.collectedTickets}></CompanyCard>
                </div>
            )
        })}
    </div>
  )
}

export default CompanyCardsRow