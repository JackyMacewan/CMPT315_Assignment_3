import React from "react";
import './emailcard.styles.css'
//showMessage is the click event
const EmailCard = ({email, selectMail}) => {
    let {id, from, subject, address, time, message, tag, read} = email;
    const handleClick = () => {
        selectMail({id, from, subject, address, time, message, tag, read});  
    }
    //pass the selectMail to onClick in the div box
    return (
        <div className = {read} id = "container" onClick = {handleClick}>
            <h3> From: {from} </h3>
            <p> Address: {address} </p>
            <p><strong> {subject} </strong>  </p>
            <p> {time} </p>
        </div>
    )
}

export default EmailCard;