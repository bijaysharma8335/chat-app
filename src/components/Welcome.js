import React from "react";
import GoogleSignin from "../Image/btn_google.png";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    return (
        <main className="welcome">
            <h2>Welcome to React Chat</h2>
            <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
            <p>Sign in with Google to chat with your fellow React Developer</p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign with google"
                    type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;
