export interface Coordinator {
    name: string;
    mail: string;
    img: string;
}

export interface ExtraInfo {
    info: string;
    img: string;
}


export interface Company {
    name: string;
    image: string;
    id: number;
    tags: string[]

    //Company information
    coordinators: Coordinator[];
    offerings: string[];
    askAbout: string[];
    extraInfo: ExtraInfo[];

    //Company header
    location: string;
    stall: number;
    starred: boolean; // User specific

    collectedTickets: number; // User specific

    aboutUs: string;
}

export interface Tickets {
    companyId: number;
    nrOfTickets: number;
}