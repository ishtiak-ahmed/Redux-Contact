import React from 'react';

const Contact = ({ contact, deleteContact }) => {
    return (
        <div className='item'>
            <h3>{contact.name}</h3>
            <button className='deleteBtn' onClick={() => deleteContact(contact.id)}>X</button>
            <p>{contact.number}</p>
            <button>Call Now</button>
            <p>{contact.email}</p>
            <button>Send Email</button>
        </div>
    );
};

export default Contact;