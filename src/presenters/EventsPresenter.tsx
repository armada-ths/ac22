import React, { FC } from "react";
import EventViewer from "../views/Events";

interface Props {
	placeholder?: string;
}

const EventsPresenter: FC<Props> = () => {
	return <EventViewer />;
};

export default EventsPresenter;
