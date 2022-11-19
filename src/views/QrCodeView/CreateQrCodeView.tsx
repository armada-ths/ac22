import { FC, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./CreateQRCodeView.css";
import logo from "../../assets/Armada_competition_filled.png";
import AuthButton from "../../components/AuthButton/AuthButton";
import ticket_img from "../../assets/TicketState/ticket-img.svg";
import plus_sign_img from "../../assets/TicketState/plus-sign-img.svg";
import useCheckMobileScreen from "../../useCheckMobileScreen";
import { auth } from "../../models/Firebase/firebaseConfig";
import fmv from "./fmv.jpeg";
import { Link } from "react-router-dom";

interface Props {
	setTicketType: (ticketType: string) => void;
	setIsShown: (isShown: boolean) => void;
	setQrCode: (qrCode: string) => void;
	company: string;
	ticketType: string;
	isShown: boolean;
	qrCode: string;
	generateURL: () => void;
	removePreviousQrCode: () => void;
	companyLogo: string;
	superTicketsLeft: number;
}

const CreateQrCodeView: FC<Props> = (props) => {
	const handleClick = () => {
		props.setIsShown(true);
		props.generateURL();
	};

	function validTicketsLeft() {
		if (props.superTicketsLeft == 0 && props.ticketType == "superticket") {
			return false;
		} else {
			return true;
		}
	}

	const [modalIsOpen, setIsOpen] = useState(false);
	const tablet = window.innerWidth > 768 && window.innerWidth < 1024;

	console.log("tablet", tablet);

	function openModal() {
		setIsOpen(true);
	}

	useEffect(() => {
		if (!useCheckMobileScreen || !tablet) {
			setIsOpen(false);
		}
	}, [tablet]);

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			{useCheckMobileScreen() ? (
				<div className="full-screen">
					<div className="main-content">
						<div className="company-name">
							Generate QRCode for {props.company}
						</div>
						<div>Supertickets Left: {props.superTicketsLeft}</div>
						<div className="ticket">
							<select
								className="select-option"
								name="tickettype"
								onChange={(e) => {
									props.setTicketType(e.target.value);
									props.setIsShown(false);
								}}>
								<option value="standardticket">Standard Ticket</option>
								<option value="superticket">Super Ticket</option>
							</select>
							<div className="mobile-button">
								<AuthButton
									onButtonClick={handleClick}
									buttonText="Create Ticket"
									buttonType="button"
									active={validTicketsLeft()}></AuthButton>
							</div>
						</div>
						<div id="qrCodeContainer">
							{props.isShown && (
								<div className="qr-container">
									<QRCode
										size={256}
										style={{ height: "auto", maxWidth: "100%", width: "100%" }}
										value={props.qrCode}
										viewBox={`0 0 256 256`}
									/>

									{props.ticketType === "superticket" ? (
										<div className="left-box">
											<div className="ticket-logo">
												<img
													className="tckt-img"
													src={ticket_img}
													alt={"ticket available"}></img>
												<img
													className="ticket-plus-sign"
													src={plus_sign_img}
													alt={"plus sign available"}></img>
											</div>
										</div>
									) : (
										""
									)}

									<h3>
										{props.ticketType === "standardticket"
											? "Standard Ticket"
											: "Super Ticket"}
									</h3>

									<div>
										<AuthButton
											onButtonClick={() => {
												props.removePreviousQrCode();
												props.setIsShown(false);
											}}
											buttonText="Remove QRCode"
											buttonType="button"
											active={true}></AuthButton>
										<h5>Only use this if ticket has not yet been scanned!</h5>
									</div>
								</div>
							)}
						</div>
						<div className="onlymobile&tab"></div>
						<div className="mobile-button">
							<AuthButton
								onButtonClick={openModal}
								buttonText="Open Modal"
								buttonType="button"
								active={true}></AuthButton>
						</div>
						{modalIsOpen ? (
							<div onClick={() => closeModal()} className="popup">
								<div className="popup-header">
									<div className="popup-close" onClick={() => closeModal()}>
										x
									</div>
								</div>
								<div className="pop-button">
									<AuthButton
										onButtonClick={() => console.log()}
										buttonText="home"
										buttonType="button"
										active={true}></AuthButton>
									<Link to="/tutorial-company">
										<AuthButton
											buttonText="How to play"
											active={true}
											buttonType={"button"}
											onButtonClick={() => console.log()}
										/>
									</Link>
									<AuthButton
										onButtonClick={() =>
											alert("Statistics will be available after the fair!")
										}
										buttonText="Statistics"
										buttonType="button"
										active={true}></AuthButton>
									<AuthButton
										onButtonClick={() => auth.signOut()}
										buttonText="Log out"
										buttonType="button"
										active={true}></AuthButton>
								</div>
							</div>
						) : null}
					</div>
				</div>
			) : (
				<div className="full-screen">
					<div className="side">
						<img src={logo} alt="logo" className="logo" />
						<div className="button-container">
							<div className="buttons">
								<AuthButton
									buttonText="Home"
									active={true}
									buttonType={"button"}
									onButtonClick={() => console.log()}
								/>
								<Link to="/tutorial-company">
									<AuthButton
										buttonText="How to play"
										active={true}
										buttonType={"button"}
										onButtonClick={() => console.log()}
									/>
								</Link>
								<AuthButton
									buttonText="Statistics"
									active={true}
									buttonType={"button"}
									onButtonClick={() =>
										alert("Statistics will be available after the fair!")
									}
								/>
								<AuthButton
									buttonText="Log out"
									active={true}
									buttonType={"button"}
									onButtonClick={() => auth.signOut()}
								/>
							</div>
						</div>
						<img
							src={require("../../assets/CompanyLogos/" + props.companyLogo)}
							alt="logo"
							className="logo"
						/>
						<div></div>
					</div>
					<div className="main-content">
						<div className="company-name">
							Generate QRCode for {props.company}
						</div>
						<div>Supertickets Left: {props.superTicketsLeft}</div>
						<div className="ticket">
							<select
								className="select-option"
								name="tickettype"
								onChange={(e) => {
									props.setTicketType(e.target.value);
									props.setIsShown(false);
								}}>
								<option value="standardticket">Standard Ticket</option>
								<option value="superticket">Super Ticket</option>
							</select>
							<AuthButton
								onButtonClick={handleClick}
								buttonText="Create Ticket"
								buttonType="button"
								active={validTicketsLeft()}></AuthButton>
							{/* <button onClick={handleClick}>Create Ticket</button> */}
						</div>

						<div id="qrCodeContainer">
							{props.isShown && (
								<div className="qr-container">
									<QRCode
										size={256}
										style={{ height: "auto", maxWidth: "100%", width: "100%" }}
										value={props.qrCode}
										viewBox={`0 0 256 256`}
									/>

									{props.ticketType === "superticket" ? (
										<div className="left-box">
											<div className="ticket-logo">
												<img
													className="tckt-img"
													src={ticket_img}
													alt={"ticket available"}></img>
												<img
													className="ticket-plus-sign"
													src={plus_sign_img}
													alt={"plus sign available"}></img>
											</div>
										</div>
									) : (
										""
									)}

									<h3>
										{props.ticketType === "standardticket"
											? "Standard Ticket"
											: "Super Ticket"}
									</h3>

									<div>
										<AuthButton
											onButtonClick={() => {
												props.removePreviousQrCode();
												props.setIsShown(false);
											}}
											buttonText="Remove QRCode"
											buttonType="button"
											active={true}></AuthButton>
										<h5>Only use this if ticket has not yet been scanned!</h5>
									</div>
									{tablet ? (
										<div className="mobile-button">
											<AuthButton
												onButtonClick={openModal}
												buttonText="Open Modal"
												buttonType="button"
												active={true}></AuthButton>
										</div>
									) : (
										""
									)}
									{modalIsOpen ? (
										<div onClick={() => closeModal()} className="popup-tablet">
											<div className="popup-header">
												<div
													className="popup-close"
													onClick={() => closeModal()}>
													x
												</div>
											</div>
											<div className="pop-button">
												<AuthButton
													onButtonClick={() => console.log()}
													buttonText="home"
													buttonType="button"
													active={true}></AuthButton>
												<Link to="/tutorial-company">
													<AuthButton
														buttonText="How to play"
														active={true}
														buttonType={"button"}
														onButtonClick={() => console.log()}
													/>
												</Link>
												<AuthButton
													onButtonClick={() =>
														alert(
															"Statistics will be available after the fair!"
														)
													}
													buttonText="Statistics"
													buttonType="button"
													active={true}></AuthButton>
												<AuthButton
													onButtonClick={() => console.log()}
													buttonText="Log out"
													buttonType="button"
													active={true}></AuthButton>
											</div>
										</div>
									) : null}
								</div>
							)}
							{tablet ? (
								<div className="mobile-button">
									<AuthButton
										onButtonClick={openModal}
										buttonText="Open Modal"
										buttonType="button"
										active={true}></AuthButton>
								</div>
							) : (
								""
							)}
							{modalIsOpen ? (
								<div onClick={() => closeModal()} className="popup-tablet">
									<div className="popup-header">
										<div className="popup-close" onClick={() => closeModal()}>
											x
										</div>
									</div>
									<div className="poptablet-button">
										<AuthButton
											onButtonClick={() => console.log("hey")}
											buttonText="home"
											buttonType="button"
											active={true}></AuthButton>
										<Link to="/tutorial-company">
											<AuthButton
												buttonText="How to play"
												active={true}
												buttonType={"button"}
												onButtonClick={() => console.log()}
											/>
										</Link>
										<AuthButton
											onButtonClick={() =>
												alert("Statistics will be available after the fair!")
											}
											buttonText="Statistics"
											buttonType="button"
											active={true}></AuthButton>
										<AuthButton
											onButtonClick={() => console.log("hey")}
											buttonText="Log out"
											buttonType="button"
											active={true}></AuthButton>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateQrCodeView;
