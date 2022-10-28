import React, { FC } from "react";

interface Props {
	setQrCode: (qrCode: string) => void;
}

const QrCodeView: FC<Props> = (props) => {
	return (
		<section>
			<div>FireBase Test</div>
			<input
				type="text"
				placeholder="Insert QrCode"
				onChange={(e) => props.setQrCode(e.target.value)}></input>
				<button
				>Add</button>
		</section>
	);
};

export default QrCodeView;
