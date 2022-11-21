import React, { FC } from "react";
import "../TutorialView/tutorial-view.css";
import "./company-tutorial-view.css";
import qrSidebar from "../../assets/Tutorial/qr-code-sidebar.png";
import qrtype from "../../assets/Tutorial/create-ticket-qr.png";
import qrpage from "../../assets/Tutorial/generate-qr-page.png";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
interface Props {}

const TutorialView: FC<Props> = () => {
  return (
    <div className="flex-bx">
      <AuthHeading title="Functions" />
      <div className="subtitles"> for companies </div>
      <div className="tutorialbox">
        <p>
          Welcome to the tutorial page for companies! Here you can find the
          information about the functions of the app. If you have any further
          questions please reach out to your contact person at Armada. The statistics will also be added at the end of the fair.
        </p>
      </div>
      <div className="goal-boxes">
      <div className="rules">
        <div className="subtitles">The Students Goal:</div>
        <div>
          To win the prises at the raffle a week after armada! How to win: the
          students must collect as many super tickets for the raffle as possible
          to increase their chance to win. To get tickets, they will talk to you
          at the your booth at the armada fair where you can provide them
          tickets by generating a QR code for them to scan.
        </div>
      </div>
      <div className="rules">
        <div className="subtitles">The Company Goals:</div>
        <div>
          To connect with students and hand out tickets to fuel the competition!
          You have 30 Super Tickets each day and an unlimited amount of standard tickets.
          A Standard Ticket is worth 3 points and a Super Ticket is worth 10 points.
        </div>
      </div> </div>

      <div className="subtitles">How to Use the App</div>

      <div className="tutorialbox">
        

        <div className="subsubtitles">Home page</div>
        <div className="text-img">
          <p>
            At the top of the homepage you can chose to generate a QR code. 
            Once the QR code is generated you will be able to generate a new one once you delete the previous QR code.
            <strong> Remember: </strong> You need to generate a new QR code for each student. 
            Students may also not represent other students or redo tasks to get more tickets.
          </p>
          <img src={qrpage} alt="Home page"/>
        </div>

        <div className="subsubtitles">Side bar</div>
        <div className="text-img">
          <p>
            To navigate the app, use the side bar on the left. The top button
            takes you to the home page.
            The next button . The next button takes
            you to your acounts setting. The second to last button takes you to
            this tutorial! The final button allows you to log out.
          </p>
          <img src={qrSidebar} alt="the sidebar"/>
        </div>

        <div className="subsubtitles">QR code types</div>
        <div className="text-img">
          <p>
            When generating a QR code you can select one of two options. 
            A Standard ticket and a Super Ticket. 
            The super tickets is worth a higher number of points, and each company competing has a limited number of tickets available. 
            Therefore, make sure to only use the Super Tickets in the tasks where you have indicated stundents will earn super tickets.
            Please note that this may put super tickets in higher demand from students.
          </p>
          <img src={qrtype} alt="Ticket options"/>
        </div>
      </div>
    </div>
  );
};

export default TutorialView;
