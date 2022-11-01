import React, { FC } from "react";
import { addToDatabase, fetchFromDatabase } from "../components/FirebaseModel"; //Temporary, this is not following MVP structure
interface Props {
	setQrCode: (qrCode: string) => void;
}

var tempQrCode: string; // Temporary variable, not following MVP structure

const QrCodeView: FC<Props> = (props) => {
	return (
		<section>
			<div>FireBase Test</div>
			<input
				type="text"
				placeholder="Insert QrCode"
				onChange={(e) => {
					props.setQrCode(e.target.value);
					tempQrCode = e.target.value; //Temporary, this is not following MVP structure
					console.log("TempQrCode: " + tempQrCode); //Temporary, this is not following MVP structure
				}}></input>
			<button
				onClick={() => {
					addToDatabase(tempQrCode); //Temporary, this is not following MVP structure
					console.log("QrCode " + tempQrCode + " adding to database");
				}}>
				Add
			</button>

			<button
				onClick={() => {
					fetchFromDatabase("users"); //Temporary, this is not following MVP structure
				}}>
				Console Log Database
			</button>
		</section>
	);
};

export default QrCodeView;
