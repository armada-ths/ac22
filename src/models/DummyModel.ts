import React from "react";

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

    //Company information
    coordinators: Coordinator[];
    offerings: string[];
    askAbout: string[];
    extraInfo: ExtraInfo[];

    //Company header
    location: string;
    stall: number;
    tickets: number;
    starred: boolean; // User specific

    collectedTickets: number; // User specific

    aboutUs: string;
}

/*
CompanyModel

this model describes all companies

i think the easiest way to access the information
is to have a static variable that includes all information about the companies
the variable will need to be declared manually

each company has an id that corresponds to its placement in the array
i don't know if this is the best way to do it but it is as far as i came
*/
export class DummyModel {
    companies: Company[];
    currentCompany: number;

    constructor(companies: Company[], currentCompany: number) {
        this.companies = companies;
        this.currentCompany = currentCompany;
    }

    setStar() {
        this.companies[this.currentCompany].starred = !this.companies[this.currentCompany].starred;
        console.log(this.companies[this.currentCompany].starred) // Ta bort
    }
}

interface Tickets {
    companyId: number;
    nrOfTickets: number;
}

/*
UserModel

this model includes all information that is user specific
that is which companies that are starred
and how many tickets that have been collected

my concern for using this model for rendering is
that we will always have to loop through the arrays
when displaying data which can be insufficient

i think the best way is to use this model when storing and retrieving
data in and from the database but adding the attributes starred and tickets
to our static variable that are user specific
*/
export class UserModel {
    starredCompanies: Company[];
    tickets: Tickets[];

    constructor(starredCompanies: Company[], tickets: Tickets[]) {
        this.starredCompanies = starredCompanies;
        this.tickets = tickets;
    }
}

/*
TicketsModel

this model will be used to keep track of the overall number of tickets
that are available for each company
this model is not user specific and is the same for all users

the companies should be ordered according to their company id even here
*/
export class TicketsModel {
    availableTickets: Tickets[];

    constructor(availableTickets: Tickets[]) {
        this.availableTickets = availableTickets;
    }
}