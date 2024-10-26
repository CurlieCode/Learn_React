

//render each contact item and provide ooptions to edit or delete 

import React from "react"
const ContactItem = ({contact, onDelete, onEdit}) => {
    return (
        <div>
            <h4>{contact.name}</h4>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => onEdit(contact)}>Edit </button>
            <button onClick={() => onDelete(contact)}>Delete</button>
        </div>
    )

}


export default ContactItem;