import React, { FC, useState, useEffect } from "react";

import "./Profile.css";
import armada_logo from "../../assets/Profile/armada.png";
import Popup from "../../assets/Profile/Popup";
import attention from "../../assets/Profile/attention.png";
//Hello Rakin

import {
	StudyProgramme,
	Genders,
	CompletionYear,
	YearOfStudy,
	PositionInterest,
	StartYear,
} from "../../components/MultiStepForm/Forms/StudyInformation";

interface Props {
	placeholder: string;
}

const ProfileView: FC<Props> = ({}) => {
	// 1 - Settings, 2 - Ticket History
	const [setings, setSettings] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

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
									<input
										type="text"
										placeholder="First Name"
										className="input-tag"
									/>
									<h4>Email</h4>
									<input
										type="text"
										placeholder="Email"
										className="input-tag"
									/>
								</div>
								<div className="lastName-gender">
									<h4>Last Name</h4>
									<input
										type="text"
										placeholder="Last Name"
										className="input-tag"
									/>
									<h4>Gender</h4>
									<select className="input-tag" placeholder="Gender" required>
										<option className="option-text" value="" disabled selected>
											Gender..
										</option>
										{Genders.map((gender) => {
											return (
												<option
													className="option-text"
													value={gender}
													key={gender}
												>
													{gender}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
						<div className="study-job-details-container">
							<div className="study-job-container">
								<div className="study-nYears">
									<h3>Study & Job Details</h3>
									<h3 className="study-years-heading">Study Years</h3>
								</div>
								<div className="selectors">
									<select
										className="input-tag input-tag1"
										placeholder="Study Programme"
									>
										{StudyProgramme.map((item, index) => (
											<option key={index} value={item}>
												{item}
											</option>
										))}
									</select>
									<select className="input-tag">
										{StartYear.map((item, index) => (
											<option key={index} value={item}>
												{item}
											</option>
										))}
									</select>
									<div className="fontSize">-</div>
									<select className="input-tag ">
										{CompletionYear.map((item, index) => (
											<option key={index} value={item}>
												{item}
											</option>
										))}
									</select>
								</div>
								<div className="checkmarks-container">
									<h3>Interests</h3>
									<div className="checkmarks">
										<div className="checkmarks-row-container">
											<input type="checkbox" className="checkbox" />
											<label>Part-time Job </label>
										</div>
										<div className="checkmarks-row-container">
											<label>Full-time Job</label>
											<input type="checkbox" className="checkbox" />
										</div>
									</div>
									<div className="checkmarks">
										<div className="checkmarks-row-container">
											<input type="checkbox" className="checkbox" />
											<label>Internship</label>
										</div>
										<div>
											<label>Bachelor Thesis</label>
											<input type="checkbox" className="checkbox" />
										</div>
									</div>
									<div className="checkmarks">
										<div className="checkmarks-row-container">
											<input type="checkbox" className="checkbox" />
											<label>Master Thesis </label>
										</div>
										<div className="checkmarks-row-container">
											<label>Trainee</label>
											<input type="checkbox" className="checkbox" />
										</div>
									</div>
									<div className="checkmarks">
										<div className="checkmarks-row-container">
											<input type="checkbox" className="checkbox" />
											<label>Summer Job </label>
										</div>
										<div className="checkmarks-row-container">
											<label>Other</label>
											<input type="checkbox" className="checkbox" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Implement Delete button from Firebase here and the pop up */}
						<div className="GDPR-stuff-container">
							<div className="delete-account-button">
								<div
									className="delete-acc-font"
									onClick={togglePopup}
								>
									Delete My Account
									{isOpen && (
										<Popup
											content={
												<div className="popup-container">
													<div className="">
														<div className="popup-img-box">
															<img
																src={attention}
																alt="attention"
																className="popup-img"
															></img>
														</div>
														<div className="popup-text-box">
															<h2>Attention!</h2>
															<div className="popup-subtext color-greytext">
																This action will delete your account and all
																related data
															</div>
															<div className="color-red">
																This action is irreversible.
															</div>
															<div className="">Do you want to continue?</div>
														</div>
														<div className="popup-button-cancel-container">
															<div className="popup-greenbox-cancel">
															<div className="popup-cancel">No Cancel</div>
															</div>
														</div>
														<div className="popup-button-deleteacc">Yes delete my account</div>
													</div>
												</div>
											}
											handleClose={togglePopup}
										/>
									)}
								</div>
							</div>
							<div className="delete-account-button">
								<div className="discard-changes-font">Discard Changes </div>
							</div>
							<div className="delete-account-button save-changes-font save-changes">
								<div>Saves Changes</div>
							</div>
						</div>
					</div>
				) : (
					<div className="tickethistory-container ">
						<div>This page has not yet been added but is on it's way</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfileView;
