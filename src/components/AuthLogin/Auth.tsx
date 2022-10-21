
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Login from "./LoginComp";
//import "./App.css";
import auth from "./fire";



const App = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        signInWithEmailAndPassword(auth, email, password)
        .catch((err) => {
            switch(err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };
    
    const handleSignUp = () => {
        clearErrors();
        createUserWithEmailAndPassword(auth, email, password)
            .catch((err) => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        signOut(auth);
    };

    const authListener = () => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
            clearInputs();
            setUser(user);
        } else {
            setUser("");
        }
      });
    };

    useEffect(() =>{
        authListener();
    }, [])


    return (
        <div className="App">
            <Login 
            email={email} 
            setEmail={setEmail} 
            setPassword={setPassword} 
            password={password} 
            handleLogin={handleLogin} 
            handleSignup={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />
        </div>
    );
};

export default App;