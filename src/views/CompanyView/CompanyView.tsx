import { FC } from 'react'
import { Link } from "react-router-dom";
import './CompanyView.css'

import CompanyCard from '../../components/CompanyCard/CompanyCard';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';
import CompanyInformation from '../../components/CompanyInformation/CompanyInformation';
import { Company, Tickets } from '../../models/DummyModel';

import arrow_left_img from '../../assets/CompanyView/arrow-left-img.svg'
import arrow_right_img from '../../assets/CompanyView/arrow-right-img.svg'

/**
 * companies:        an array of companies that is used to display the cards
 * currentCompany:   the company id that the user is currently viewing
 * onStar:           callback function that is called when the button is pressed
 * availableTickets: an array of the available number of tickets left for each company
 *                   you can find the number of tickets left for a specific company by
 *                   using the company id as an index since the logic right now is that
 *                   the company id corresponds to the company's index in the array
 */
interface Props {
    companies: Company[];
    currentCompany: number;
    onStar: () => void;
    availableTickets: Tickets[];
}

const CompanyView: FC<Props>= ({ companies, currentCompany, onStar, availableTickets }) => {
    const company = companies[currentCompany];
    return (
    <div className='company-container'>
      <div className='company-header'>
        <div className='company-bar'>
          <Link to={"/"}><img src={arrow_left_img} alt={"arrow left company page"}></img></Link>
          <div className='company-right-bar'>
            <div>Tickets</div>
            <button>Profile</button>
          </div>
        </div>
        <div className='company-title'>
          <span className='h1'>{company.name}</span>
          <span className='h2'>{company.tags.map(tag => {
                if (tag == company.tags.at(-1)) // If it is the last element
                  return <span key={tag}>{tag}</span>
                else
                  return <span key={tag}>{tag + " · "}</span>})}</span>
        </div>
      </div>

      <div className='company-body'>
        <div className='company-header-component'>
          <CompanyHeader
            location={company.location}
            stall={company.stall}
            tickets={availableTickets[currentCompany].nrOfTickets}
            starred={company.starred}
            onStar={() => onStar()}></CompanyHeader>
        </div>

        <div className='company-information'>
          <div>
            <div className='company-about'>
              <span className='h1'>About {company.name}</span>
              <span>{company.aboutUs}</span>
            </div>
          </div>
          <CompanyInformation 
            coordinators={company.coordinators}
            offerings={company.offerings}
            askAbout={company.askAbout}
            extraInfo={company.extraInfo}></CompanyInformation>
        </div>
      </div>

      <div className='company-cards-body'>
        <div className='company-cards-header'>
          <span>Nearby Stalls</span>
          <div>
            <span>All Stalls</span>
            <img src={arrow_right_img} alt={"arrow right company page"}></img>
          </div>
        </div>
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
        </div>
    </div>
  )
}

export default CompanyView