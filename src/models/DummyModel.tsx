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

    //Company information
    coordinators: Coordinator[];
    offerings: string[];
    askAbout: string[];
    extraInfo: ExtraInfo[];

    //Company header
    location: string;
    stall: number;
    tickets: number;
    starred: boolean;

    aboutUs: string;
}

export class DummyModel {
    companies: Company[];
    currentCompany: number;

    constructor(companies: Company[], currentCompany: number) {
        this.companies = companies;
        this.currentCompany = currentCompany;
    }

    setStar() {
        this.companies[this.currentCompany].starred = !this.companies[this.currentCompany].starred;
        console.log(this.companies[this.currentCompany].starred) //Ta bort
    }
}