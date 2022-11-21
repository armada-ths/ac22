import React, { FC } from "react";
import RaffleCountdown from "../components/RaffleCountdown/RaffleCountdown";
import TicketCounter from "../components/TicketCounter/TicketCounter";
import { auth } from "../models/Firebase/firebaseConfig";
import { UserModel } from "../models/UserModel";

interface Props {
  model?: UserModel;
}

const HomeViewer: FC<Props> = ({ model }) => {
  return (
    <div>
      <button
        onClick={() => {
          model?.toggleStar("Ninas Company");
        }}
      >
        Toggle Star
      </button>
      <RaffleCountdown />
      <TicketCounter tickets={10} />
    </div>
  );
};

export default HomeViewer;
