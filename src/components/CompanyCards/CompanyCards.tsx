import React, { FC } from "react";
import "./CompanyCards.css";

interface Props {
  image: string;
  company: string;
  text: string;
  route: string;
}

const CompanyCards: FC<Props> = ({ image, company, text, route }) => {
  return (
    <div className="card-box">
      <div style={{flex: 4}}>{image}</div>
      <div style={{flex: 1}}>{company}</div>
      <div style={{flex: 1}}>{text}</div>
      <div style={{flex: 1, left:0}}>
        <a href={route} className="button">Find out more</a>
      </div>
    </div>
  );
};

export default CompanyCards;
