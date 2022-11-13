import React, { FC, useState, useEffect } from "react";

import "./Profile.css";
import armada_logo from "../../assets/Profile/armada.png";

interface Props {
	placeholder: string;
}

const ProfileView: FC<Props> = () => {
	// 1 - Settings, 2 - Ticket History
	const [setings, setSettings] = useState<boolean>(true);

	return (
		<div className="Profile-Container">
			<span className="Profile-header-container">
				<div className="Settings-header">
					<h2
						onClick={() => {
							setSettings(true);
						}}
						className={setings ? "active-header" : "inactive-header"}
					>
						Settings
					</h2>
				</div>
				<div className="pointer">
					<h2
						onClick={() => {
							setSettings(false);
						}}
						className={!setings ? "active-header" : "inactive-header"}
					>
						Ticket History
					</h2>
				</div>
			</span>
			<div className="profile-content-container">
				{setings ? (
					/*This is the content of the pages*/
					<div className="settings-content">
						<div className="personalInfo-container">
							<h3>Personal details</h3>
							<div className="personal-details-container">
								<div>
									<img
										alt="armada-logo"
										src={armada_logo}
										className="roundCircle"
									></img>
								</div>
								<div className="name-mail-inputs">
									<h4>First Name</h4>
									<input type="text" placeholder="First Name" />
									<h4>Email</h4>
									<input type="text" placeholder="Email" />
								</div>
								<div className="lastName-gender">
									<h4>Last Name</h4>
									<input type="text" placeholder="Last Name" />
									<h4>Gender</h4>
									<input type="text" placeholder="Gender" />
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="tickethistory-container">
						This page has not yet been added but is on it's way
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfileView;
