import React from "react";
import GoogleSignin from "../Image/btn_google.png";
const Welcome = () => {
    const googleSignIn = () => {};
    return (
        <main className="welcome">
            <h2>Welcome to React Chat</h2>
            <img src={GoogleSignin} alt="ReactJs logo" width={50} height={50} />
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
