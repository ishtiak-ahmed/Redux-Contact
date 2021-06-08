export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
// export const DELETE_CONTACT = 'DELETE_CONTACT'

export const addToContactList = (contact) => {
    return { type: ADD_CONTACT, contact: contact }
}
export const deleteFromContactList = id => {
    return { type: DELETE_CONTACT, id }
}