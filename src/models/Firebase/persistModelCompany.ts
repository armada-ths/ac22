import { CompanyUserModel } from "../companyUserModel";

import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, database } from "./firebaseConfig";

export async function persistModelCompany(model: CompanyUserModel) {

}