import { FC } from 'react'
import { Link } from "react-router-dom";
import './CompanyView.css'

import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';
import CompanyInformation from '../../components/CompanyInformation/CompanyInformation';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import { Company, Tickets } from '../../models/DummyModel';

import arrow_img from '../../assets/CompanyView/arrow-img.svg'
import arrow_2_img from '../../assets/CompanyView/arrow-2-img.svg'

interface Props {
    companies: Company[];
    company: Company; /*Change to currentCompany?*/
    setStar: () => void;
    availableTickets: Tickets[];
}

const CompanyView: FC<Props>= ({ companies, company, setStar, availableTickets }) => {
  return (
    <div className='company-container'>

      <div className='company-header1'>
        <div className='company-bar'>
          <Link to={"/"}><img src={arrow_img}></img></Link>
          <div className='company-right-bar'>
            <div>Tickets</div>
            <button>Profile</button>
          </div>
        </div>
        <div className='company-title'>
          <h1>{company.name}</h1>
          <h2>Tags</h2>
        </div>
      </div>

      <div className='company-body'>
        <div className='company-header2'>
          <CompanyHeader
            location={company.location}
            stall={company.stall}
            tickets={company.tickets}
            starred={company.starred}
            onStar={() => setStar()}></CompanyHeader>
        </div>
        <div className='company-information'>
          <div>
            <div className='company-about'>
              <h1>About {company.name}</h1>
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
            <img src={arrow_2_img}></img>
          </div>
        </div>
          <div className='company-cards'>
            {companies.map((company) => {
                    let ticketState = company.collectedTickets > 0 ? 3 : availableTickets[company.id].nrOfTickets > 0 ? 1 : 2;
                    console.log("Ticket state: %d", ticketState)
                    return (
                      <div key={company.name} className="company-card">
                        <CompanyCard
                          image={"grey"}
                          companyName={company.name}
                          starred={company.starred}
                          onStar={() => setStar()}
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