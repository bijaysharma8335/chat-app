import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Message = ({ message }) => {
    const [user] = useAuthState(auth);
    return (
        <div className={`chat-bubble ${message.uid === user.id ? "right " : ""}`}>
            <img src={message.avatar} className="chat-bubble__left" alt="user avatar" />
            <div className="chat-bubble__right">
                <p className="user-name">{message.name}</p>
                <p className="user-message">{message.text}</p>
            </div>
        </div>
    );
};

export default Message;
