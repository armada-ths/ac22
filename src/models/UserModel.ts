import { doc, deleteDoc } from "firebase/firestore";
import { database } from "./Firebase/firebaseConfig";

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
  tags: string[];

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

interface UserInfo {
  completionYear: string;
  email: string; // Not change
  jobInterests: string[];
  studyProgramme: string;
  yearOfStudy: string;
}

/**Company name is used as key*/
export interface DbTicket {
  nrOfTickets: number;
  nrOfSuperTickets: number;
}

export class UserModel {
  collectedTickets: DbTicket;
  starredCompanies: string[];
  visitedCompanies: string[];
  currentCompany: number;
  points: number;

  isStudent: boolean;
  userInfo: UserInfo;

  observers: Map<string, () => void>;

  uid?: string;

  constructor() {
    this.collectedTickets = {
      nrOfTickets: 0,
      nrOfSuperTickets: 0,
    };
    this.starredCompanies = [];
    this.visitedCompanies = [];
    this.currentCompany = -1;
    this.points = 0;

    this.isStudent = true;
    this.userInfo = {
      completionYear: "",
      email: "",
      jobInterests: [],
      studyProgramme: "",
      yearOfStudy: "",
    };

    this.observers = new Map<string, () => void>([
      ["collectedTickets", function () {}],
      ["starredCompanies", function () {}],
      ["visitedCompanies", function () {}],
      ["currentCompany", function () {}],
      ["userInfo", function () {}],
    ]);
  }

  /**Adds a ticket to the model and updates the db */
  addTicket(isSuper: boolean) {
    if (isSuper) this.collectedTickets.nrOfSuperTickets++;
    else this.collectedTickets.nrOfTickets++;
    this.notifyObservers("collectedTickets");
  }

  /**Returns true if the given company is starred, false if not */
  isStarred(companyName: string): boolean {
    return this.starredCompanies.filter((company) => company == companyName)
      .length
      ? true
      : false;
  }

  addStarredCompany(companyName: string) {
    if (!this.isStarred(companyName)) {
      this.starredCompanies = [...this.starredCompanies, companyName];
      this.notifyObservers("starredCompanies");
    }
  }

  removeStarredCompany(companyName: string) {
    if (this.isStarred(companyName)) {
      this.starredCompanies = this.starredCompanies.filter(
        (company) => company != companyName
      );
      this.notifyObservers("starredCompanies");
    }
  }

  /**Stars or unstars a given company in the model and updates the db */
  toggleStar(companyName: string) {
    if (this.isStarred(companyName)) this.removeStarredCompany(companyName);
    else this.addStarredCompany(companyName);
    this.notifyObservers("starredCompanies");
  }

  /**Returns true if the given company has been visited, false if not */
  private isVisited(companyName: string) {
    return this.visitedCompanies.filter((company) => company == companyName)
      .length
      ? true
      : false;
  }

  /**Adds a given visited company to the model and updates the db */
  addVisitedCompany(companyName: string) {
    if (!this.isVisited(companyName)) {
      this.visitedCompanies = [...this.visitedCompanies, companyName];
      this.notifyObservers("visitedCompanies");
    }
  }

  /**Removes a given visited company to the model and updates the db */
  removeVisitedCompany(companyName: string) {
    if (this.isVisited(companyName))
      this.visitedCompanies = this.visitedCompanies.filter(
        (company) => company != companyName
      );
    this.notifyObservers("visitedCompanies");
  }

  /**Updates the current company and updates the db */
  updateCurrentCompany(currentCompany: number) {
    this.currentCompany = currentCompany;
    this.notifyObservers("currentCompany");
  }

  addObserver(observer: string, callback: () => void) {
    this.observers.set(observer, callback);
  }

  removeObserver(observer: string) {
    this.observers.delete(observer);
  }

  notifyObservers(observer: string) {
    const func = this.observers.get(observer);
    if (func) func();
  }

  setCollectedTickets(collectedTickets: DbTicket) {
    this.collectedTickets = collectedTickets;
  }

  setStarredCompanies(starredCompanies: string[]) {
    this.starredCompanies = starredCompanies;
  }

  setVisitedCompanies(visitedCompanies: string[]) {
    this.visitedCompanies = visitedCompanies;
  }

  setCurrentCompany(currentCompany: number) {
    this.currentCompany = currentCompany;
  }

  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  /**
  async deleteAccount() {
    if (this.uid) await deleteDoc(doc(database, "users", this.uid));
  }
  */
}
