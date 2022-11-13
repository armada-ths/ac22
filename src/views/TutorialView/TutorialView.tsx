import React, { FC } from "react";
import "./tutorial-view.css";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
interface Props { }

const TutorialView: FC<Props> = () => {
    return (
        <div className="flex-bx">
            <div className="subtitles">How to Play</div>
            <div className="text-img tutorialbox">
                <p> <strong>Goal:</strong> Win the prises at the raffle a week after armada!
                    How to win: Collect as many super tickets for the raffle as possible to increase your chance to win!
                    To get tickets, talk to the different booths at the armada fair and be rewarded tickets when completing their tasks.
                </p><img />
            </div>
            <div className="rules">
                <div className="subtitles">Rules</div>
                <ul>
                    <li>You must currently be a student at KTH.</li>
                    <li>You may only complete each task once.</li>
                    <li>Each student may only have one account.</li>
                    <li>You may not impersonate other students.</li>
                </ul>
                <div>If any of the rules above are broken you will be disqualified from the competition and a new winner will be chosen.</div>
            </div>

            <div className="subtitles">
                How to Use the App
            </div>

            <div className="tutorialbox">

                <div className="subsubtitles">Navigation bar</div>
                <div className="text-img">
                    <p>To navigate the app, use the side bar on the left.
                        The top button takes you to the overview of the organisations at the Armada fair.
                        The next button takes you to the home page.
                        The next button takes you to your acounts setting.
                        The final button allows you to log out.
                    </p>
                    <img />
                </div>


                <div className="subsubtitles">Dashboard</div>
                <div className="text-img">
                    <p>At the top of the dashboard you can navigate to your profile with the button furthest to the right. There is also a button that opens the QR-code scanner.
                        Bellow the spotlighted company you can also see how many tickets you have collected, your ranking among your peers and the time until the raffle.
                    </p>
                    <img />
                </div>

                <div className="subsubtitles">Summary Cards</div>
                <div className="text-img">
                    <p>
                        Identify booths using their summary cards. Here you can see the number of super tickets available to you from each company.
                        You can also star each company by clicking the star in the right corner. Click the summary card to get taken tot the company's page.
                    </p>
                    <img />
                </div>

                <div className="subsubtitles">Company Page</div>
                <div className="text-img">
                    <p>
                        The company's page header has information about the location, booth number and total number of super tickets.
                        Bellow is a short summary about the company.
                        On the right is the contact information to the booth coordinators, the services offered by the company and other additional information.
                    </p>
                    <img />
                </div>
            </div>

        </div>
    );
};

export default TutorialView;
