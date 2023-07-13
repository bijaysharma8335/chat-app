import React, { useState } from "react";
import GoogleSignin from "../Image/btn_google.png";
import {auth} from '../firebase'

const Navbar = () => {
    const [user, setUser] = useState(false);

    const signOut = () => {
        setUser(false);
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
                    <img src={GoogleSignin} alt="sign in with google" type="button" />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
