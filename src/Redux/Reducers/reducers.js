import { ADD_CONTACT, DELETE_CONTACT } from "../Actions/actions";

const initialState = {
    contactList: [
        { id: 1, name: 'John Doe', number: '123456', email: 'john@doe.com' },
        { id: 2, name: 'Emma Ahmed', number: '123456', email: 'emma@ahmed.com' },
        { id: 3, name: 'John Doe', number: '123456', email: 'john@doe.com' }
    ]
}

const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            const newContact = action.contact;
            const newList = [...state.contactList, newContact];
            return { ...state, contactList: newList };
        }
        case DELETE_CONTACT: {
            const id = action.id;
            const newList = state.contactList.filter(contact => contact.id !== id)
            return { ...state, contactList: newList }
        }
        default:
            return state;
    }
}
export default contactReducers;