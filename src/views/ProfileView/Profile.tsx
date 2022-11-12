import React, { FC, useState, useEffect } from "react";

import "./Profile.css";

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
							console.log("Settings:pressed");
						}}
						className={setings ? "active-header" : "inactive-header"}
					>
						Settings
					</h2>
				</div>
				<div>
					<h2
						onClick={() => {
							console.log("Tickets:pressed");
						}}
						className={!setings ? "active-header" : "inactive-header"}
					>
						Ticket History
					</h2>
				</div>
			</span>
			<div className="profile-content-container">
				{setings ? (
					<div>Hello I hope this works</div>
				) : (
					<div>This probably won't work but worth a try right?</div>
				)}
			</div>
		</div>
	);
};

export default ProfileView;
