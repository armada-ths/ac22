import React, { FC } from "react";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import TutorialView from "../views/TutorialView/TutorialView";

interface Props {
  collectedTickets: number;
  name: String[];
}

const TutorialPresenter: FC<Props> = ({ name, collectedTickets }) => {
  return (
    <div>
      <NavBar
        name={name}
        title="Tutorial"
        collectedTickets={collectedTickets}
        qrButtonActive={true}
      />
      <Sidebar />
      <TutorialView />;
    </div>
  );
};

export default TutorialPresenter;
