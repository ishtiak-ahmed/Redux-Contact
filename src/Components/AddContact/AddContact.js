import React from 'react';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import { addToContactList } from '../../Redux/Actions/actions';

const AddContact = (props) => {
    const { contactList, addToContactList } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAdd = data => {
        const id = (contactList[contactList.length - 1]).id + 1
        const newContact = { ...data, id: id }
        console.log(newContact)
        addToContactList(newContact)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAdd)}>
                <div>
                    <p>Name:</p>
                    <input {...register('name', { required: true })} type="text" /> <br />
                    {errors.name && <span>Name is required</span>}
                </div>
                <div>
                    <p>Number:</p>
                    <input {...register('number', { required: true })} type="text" /> <br />
                    {errors.number && <span>Number is required</span>}
                </div>
                <div>
                    <p>Email:</p>
                    <input {...register('email')} type="text" /> <br />
                </div>
                <div>
                    <p>.</p>
                    <input type="submit" value="Add Contact" />
                </div>
            </form>
        </div>
    );
};

// export default AddContact;
const mapStateToProps = state => {
    return {
        contactList: state.contactList
    }
}


const mapDispatchToProps = {
    addToContactList: addToContactList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);