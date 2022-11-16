import React, { FC } from "react";
import "./tutorial-view.css";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import Sidebar from "../../assets/Tutorial/side-bar-img.png";
import topBar from "../../assets/Tutorial/top-bar-img.png";
import ticketCounter from "../../assets/Tutorial/ticket-counter-img.png";
import dashboardImg from "../../assets/Tutorial/dashboard-img.png";
import companyCards from "../../assets/Tutorial/company-cards-img.png";
interface Props {}

const TutorialView: FC<Props> = () => {
  return (
    <div className="flex-bx">
      <div className="subtitles">How to Play</div>
      <div className="text-img tutorialbox">
        <p>
          <strong>Goal:</strong> Win the prises at the raffle a week after
          armada! How to win: Collect as many tickets for the raffle as
          possible to increase your chance to win! 
          Standard tickets are worth 3 points and Super Tickets are worth 10.
          To get tickets, talk to the different booths at the armada fair and be rewarded tickets when
          completing their tasks. But watch out! There are only 15 super tickets per booth!
        </p>
        <img src={ticketCounter} alt="Ticket counter" />
      </div>
      <div className="rules">
        <div className="subtitles">Rules</div>
        <ul>
          <li>You must currently be a student at KTH.</li>
          <li>You may only complete each task once.</li>
          <li>Each student may only have one account.</li>
          <li>You may not impersonate other students.</li>
        </ul>
        <div>
          If any of the rules above are broken you will be disqualified from the
          competition and a new winner will be chosen.
        </div>
      </div>
      <div className="subtitles">How to Use the App</div>
      <div className="tutorialbox">
        <div className="subsubtitles">Top bar</div>
        <div className="text-img">
          <p>
            To view your own progress, please use the top bar. Press the title
            of the page to be taken to the top of the current page. The ticket
            button takes you to a page detailing the history of your ticket
            collection. The next button takes you to a page that allows you to
            scan QR codes to collect tickets. The button with youre name takes
            you to your accounts settings.
          </p>
          <img src={topBar} alt="Top bar image" />
        </div>

        <div className="subsubtitles">Side bar</div>
        <div className="text-img">
          <p>
            To navigate the app, use the side bar on the left. The top button
            takes you to the overview of the organisations at the Armada fair.
            The next button takes you to the home page. The next button takes
            you to your acounts setting. The second to last button takes you to
            this tutorial! The final button allows you to log out.
          </p>
          <img src={Sidebar} alt="Sidebar image" />
        </div>

        <div className="subsubtitles">Dashboard</div>
        <div className="text-img">
          <p>
            At the top of the dashboard you can see a spotlighted company. To
            view the company's page plase click on the banner. The arrows in the
            corner also allows you to view other companies banners. You can also
            see how many tickets you have collected, and how long until the
            winners are drawn. At the bottom of the page you are also able to
            sort through all the competition's companies' summary cards.
          </p>
          <img src={dashboardImg} alt="Dashboard image" className="dash" />
        </div>

        <div className="subsubtitles">Summary Cards</div>
        <div className="text-img">
          <p>
            Identify booths using their summary cards. Here you can see the
            number of super tickets available to you from each company. You can
            also star each company by clicking the star in the right corner.
            Click the summary card to get taken tot the company's page. All the
            companies that are participating in the competition have a card in
            the{" "}
            <a href="/overview">
              {" "}
              <strong>overview page</strong>
            </a>
            .
          </p>
          <img src={companyCards} alt="Company cards image" />
        </div>

        <div className="subsubtitles">Company Page</div>
        <div className="text-img">
          <p>
            The company's page header has information about the location, booth
            number and total number of super tickets. Bellow is a short summary
            about the company. On the right is the contact information to the
            booth coordinators, the services offered by the company and other
            additional information.
          </p>
          <img />
        </div>
      </div>
    </div>
  );
};
export default TutorialView;
