import {dummyCompanies} from "./dummyConstant"

interface Coordinator {
    name: string;
    mail: string;
    img: string;
}

interface ExtraInfo {
    info: string;
    img: string;
}

interface Company {
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

    aboutUs: string;
}

/**Company name is used as key*/
export interface DbTicket {
    nrOfTickets: number;
    nrOfSuperTickets: number;
}

export class UserModel {
    collectedTickets: Map<string, DbTicket>;
    starredCompanies: string[];
    currentCompany: string;
    observers: (() => void)[];

    constructor(collectedTickets: Map<string, DbTicket>, starredCompanies: string[], currentCompany: string, observers: (() => void)[]) {
        this.collectedTickets = collectedTickets;
        this.starredCompanies = starredCompanies;
        this.currentCompany = currentCompany;
        this.observers = observers;
    }

    addTicket(companyName: string, isSuper: boolean) {
        let addedTicket = this.collectedTickets.get(companyName); // Ref?

        if(addedTicket && isSuper)
            addedTicket.nrOfSuperTickets++;
        else if(addedTicket && !isSuper)
            addedTicket.nrOfTickets++;
        else if(isSuper)
            this.collectedTickets.set(companyName, {
                nrOfTickets: 0,
                nrOfSuperTickets: 1
            })
        else
            this.collectedTickets.set(companyName, {
                nrOfTickets: 1,
                nrOfSuperTickets: 0
            })
    }

    isStarred(companyName: string): boolean {
        return this.starredCompanies.filter(company => company == companyName).length ? true : false
    }

    addCompany(companyName: string) {
        if(!this.isStarred(companyName))
            this.starredCompanies = [...this.starredCompanies, companyName]
        this.notifyObservers()
    }

    removeCompany(companyName: string) {
        if(this.isStarred(companyName))
            this.starredCompanies = this.starredCompanies.filter(company => company != companyName)
            this.notifyObservers()
    }

    toggleStar(companyName: string) {
        if(this.isStarred(companyName))
            this.removeCompany(companyName);
        else
            this.addCompany(companyName);
            this.notifyObservers();
    }

    addObserver(callback: () => void) {
        this.observers = [...this.observers, callback];
    }
    
    removeObserver(callback: () => void) {
        this.observers = this.observers.filter(cb => cb !== callback);
    }

    notifyObservers() {
        this.observers.forEach(cb => cb());
    }

    setCollectedTickets(collectedTickets: Map<string, DbTicket>) {
        this.collectedTickets = collectedTickets;
    }

    setStarredCompanies(starredCompanies: string[]) {
        this.starredCompanies = starredCompanies;
    }

    setCurrentCompany(currentCompany: string) {
        this.currentCompany = currentCompany;
    }
}