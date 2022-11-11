import React, { FC } from "react";

interface Props {
	placeholder: string;
}

const ProfileView: FC<Props> = ({ placeholder }) => {
	return <div>{placeholder}</div>;
};

export default ProfileView;
