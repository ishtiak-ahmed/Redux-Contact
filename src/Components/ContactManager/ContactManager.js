import React from 'react';
import { connect } from 'react-redux';
import { deleteFromContactList } from '../../Redux/Actions/actions';
import AddContact from '../AddContact/AddContact';
import Contact from '../Contact/Contact';

const ContactManager = (props) => {
    const { contactList, deleteFromContactList } = props;
    return (
        <div>
            <AddContact></AddContact>
            <h2>Total Contact : {contactList.length}</h2>
            {
                contactList.map(contact => <Contact key={contact.id} deleteContact={deleteFromContactList} contact={contact}></Contact>)
            }
        </div>
    );
};

// export default ContactManager;
const mapStateToProps = state => {
    return {
        contactList: state.contactList
    }
}


const mapDispatchToProps = {
    deleteFromContactList: deleteFromContactList
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManager);