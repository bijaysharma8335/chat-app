import React, { useState } from "react";
import GoogleSignin from "../Image/btn_google.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
    
    //signin function
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    //signout function
    const signOut = () => {
        auth.signOut();
    };

    return (
        <nav className="nav-bar">
            <h1>React Chat</h1>
            {user ? (
                <button onClick={signOut} className="sign-out" type="button">
                    Sign Out
                </button>
            ) : (
                <button className="sign-in">
                    <img
                        onClick={googleSignIn}
                        src={GoogleSignin}
                        alt="sign in with google"
                        type="button"
                    />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
