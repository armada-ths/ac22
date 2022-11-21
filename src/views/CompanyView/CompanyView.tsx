import { FC } from "react";
import { Link } from "react-router-dom";
import "./CompanyView.css";

import CompanyCardsRow from "../../components/CompanyCardsRow/CompanyCardsRow";
import CompanyHeader from "../../components/CompanyHeader/CompanyHeader";
import CompanyInformation from "../../components/CompanyInformation/CompanyInformation";
import { Company, Tickets } from "../../models/DummyModel";

import arrow_left_img from "../../assets/CompanyView/arrow-left-img.svg";
import arrow_right_img from "../../assets/CompanyView/arrow-right-img.svg";
import { UserModel } from "../../models/UserModel";
import React from "react";

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
  userModel: UserModel;
  companies: Company[];
  onStar: (companyName: string) => void;
  availableTickets: Tickets[];
}

const CompanyView: FC<Props> = ({
  userModel,
  companies,
  onStar,
  availableTickets,
}) => {
  const [currentCompany, setCurrentCompany] = React.useState(
    userModel.currentCompany
  );
  console.log(currentCompany);
  const company = companies[currentCompany];
  return (
    <div className="company-container">
      <div className="company-header">
        <div className="company-bar">
          <Link to={"/"}>
            <img src={arrow_left_img} alt={"arrow left company page"}></img>
          </Link>
          <div className="company-right-bar">
            <div>Tickets</div>
            <button>Profile</button>
          </div>
        </div>
        <div className="company-title">
          <span className="h1">{company.name}</span>
          <span className="h2">
            {company.tags.map((tag) => {
              if (tag == company.tags.at(-1))
                // If it is the last element
                return <span key={tag}>{tag}</span>;
              else return <span key={tag}>{tag + " · "}</span>;
            })}
          </span>
        </div>
      </div>

      <div className="company-body">
        <div className="company-header-component">
          <CompanyHeader
            companyName={companies[userModel.currentCompany].name}
            location={company.location}
            stall={company.stall}
            tickets={availableTickets[currentCompany].nrOfTickets}
            starred={company.starred}
            onStar={onStar}
          ></CompanyHeader>
        </div>

        <div className="company-information">
          <div>
            <div className="company-about">
              <span className="h1">About {company.name}</span>
              <span>{company.aboutUs}</span>
            </div>
          </div>
          <CompanyInformation
            coordinators={company.coordinators}
            offerings={company.offerings}
            askAbout={company.askAbout}
            extraInfo={company.extraInfo}
          ></CompanyInformation>
        </div>
      </div>

      <div className="company-cards-body">
        <div className="company-cards-header">
          <span>Nearby Stalls</span>
          <div>
            <span>All Stalls</span>
            <img src={arrow_right_img} alt={"arrow right company page"}></img>
          </div>
        </div>
        <CompanyCardsRow
          userModel={userModel}
          companies={companies}
          availableTickets={availableTickets}
          onStar={onStar}
          a={0}
          onCardClick={setCurrentCompany}
        ></CompanyCardsRow>
      </div>
    </div>
  );
};

export default CompanyView;
