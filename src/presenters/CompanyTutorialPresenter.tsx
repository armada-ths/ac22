import React, { FC } from "react";
import CompanyTutorialView from "../views/CompanyTutorialView/CompanyTutorialView";

interface Props {
  collectedTickets: number;
  name: String[];
}

const CompanyTutorialPresenter: FC = () => {
  return (
    <div>
      <CompanyTutorialView />;
    </div>
  );
};

export default CompanyTutorialPresenter;
