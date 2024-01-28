import './body.styles.css'

const Message = ({email}) => {
    if (Object.keys(email).length > 0) {
        return (
        <div className = 'message'>
            <h3> {email.subject} </h3>
            <h4> {email.from} &nbsp; &lt;{email.address}&gt;  &nbsp;&nbsp; &nbsp;&nbsp; {email.time} </h4>
            <h4> To: You </h4>
            <hr></hr>
            <p> {email.message} </p>
        </div>
        ) 
    }
    else {
     return (
            <div className = 'message'>
            </div>
        )  
    }
}

export default Message;