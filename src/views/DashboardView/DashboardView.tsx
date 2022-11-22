import React, { FC, useState } from "react";
import "./DashboardView.css";

import arrow_left from "../../assets/DashboardView/arrow-left.svg";
import arrow_right from "../../assets/DashboardView/arrow-right.svg";
import arrow_left_white from "../../assets/DashboardView/arrow-left-white.svg";
import arrow_right_white from "../../assets/DashboardView/arrow-right-white.svg";
import TicketCounter from "../../components/TicketCounter/TicketCounter";
import RaffleCountdown from "../../components/RaffleCountdown/RaffleCountdown";

import { Company, Tickets } from "../../models/DummyModel";

import CompanyCardsRow from "../../components/CompanyCardsRow/CompanyCardsRow";

interface Props {
  companies: Company[];
  onStar: () => void;
  availableTickets: Tickets[];
  collectedTickets: number;
}

const DashboardView: FC<Props> = ({
  companies,
  onStar,
  availableTickets,
  collectedTickets,
}) => {
  const rand: number = Math.floor(Math.random() * 14);
  const [a, setA] = useState(0);
  const [spotlight, setSpotlight] = useState<number>(rand);

  return (
    <div className="dashboard-box">
      <div className="dashboard-spotlight-container">
        <div
          className="dashboard-spotlight dashboard-cover"
          style={{
            backgroundImage: `url(${companies[spotlight].image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="spotlight-header">
            <span>SPOTLIGHT</span>
            <div className="spotlight-right arrows">
              {spotlight !== 0 && (
                <img
                  src={arrow_left_white}
                  alt={"arrow right starred page"}
                  onClick={() => {
                    setSpotlight(spotlight - 1);
                  }}
                ></img>
              )}
              {spotlight !== 11 && (
                <img
                  src={arrow_right_white}
                  alt={"arrow right starred page"}
                  onClick={() => {
                    setSpotlight(spotlight + 1);
                  }}
                ></img>
              )}
            </div>
          </div>
          <div className="spotlight-info">
            <h1>{companies[spotlight].name}</h1>
            <h2>STALL: {companies[spotlight].stall}</h2>
            <span>{companies[spotlight].location}</span>
          </div>
        </div>
      </div>

      <div className="fair-info">
        <TicketCounter tickets={collectedTickets} />
        <RaffleCountdown />
      </div>

      <div className="dashboard-cards-body">
        <div className="dashboard-cards-header">
          <span>Your Starred Companies</span>
          <div className="arrows">
            {a !== 0 && (
              <img
                src={arrow_left}
                alt={"arrow right starred page"}
                onClick={() => {
                  setA(a - 3);
                }}
              />
            )}
            {a !== 12 && (
              <img
                src={arrow_right}
                alt={"arrow right starred page"}
                onClick={() => {
                  setA(a + 3);
                }}
              />
            )}
          </div>
        </div>
        <CompanyCardsRow
          companies={companies}
          availableTickets={availableTickets}
          onStar={() => onStar()}
          a={a}
        ></CompanyCardsRow>
      </div>
    </div>
  );
};

export default DashboardView;
