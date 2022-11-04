import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../components/Firebase/Firebase";
export class AuthModel {
    userID: string;
    username: string;
    password: string;
    constructor(
        userID = "",
        username = "",
        password = ""
    ) {
        this.userID = userID
        this.username = username
        this.password = password
    }

    LoginUser(): any {
        signInWithEmailAndPassword(auth, this.username, this.password);
       }
     
    RegisterUser(): any {
         createUserWithEmailAndPassword(auth, this.username, this.password);
       }

} 


