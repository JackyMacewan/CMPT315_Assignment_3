import React from "react";
import "./sidebar.styles.css"
import EmailCard from "../emailcard/emailcard.component";
//setContent is the on click function 
const SideBar = ({emails , cardClick}) => {
    //pass selectMail to emailCard
    return (
    <div className="sidebar">
        {emails.map(email => (
            <EmailCard key = {email.id} email = {email} selectMail={cardClick} />
        ))}
    </div>
    );
};

export default SideBar;