import React, { FC } from "react";

interface Props {
	placeholder: string;
}

const HomePresenter: FC<Props> = () => {
	return (
        <div className="App">
            Armada Competition 2022
        </div>
    )
};

export default HomePresenter;
