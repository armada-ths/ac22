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
    a:number;
}

const CompanyCardsRow: FC<Props>= ({ companies, availableTickets, onStar, a}) =>{
    function getCards(){
        return(
            
        companies.slice(a, a+3).map((company) => {
            console.log("showing companies: "+ a+ " & "+ (a+3));
            let ticketState = company.collectedTickets > 0 ? "received" : availableTickets[company.id].nrOfTickets > 0 ? "available" : "none available";
                return (
                    <div key={company.name} className="company-card">
                        <CompanyCard
                            image={company.image}
                            companyName={company.name}
                            tags={company.tags}
                            starred={company.starred}
                            onStar={() => onStar()}
                            ticketState={ticketState}
                            receivedTickets={company.collectedTickets}></CompanyCard>
                    </div>
                )
        }))
    }
  return (
    <div className='company-cards'>
        {getCards()}
    </div>
  )
}

export default CompanyCardsRow