import React, { useState } from 'react';
import Button from '../components/Forms/Button/Button';
import { signOut } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { StyledForm } from '../hoc/form';


const SignOut = () => {
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth.uid)
    const signOutAction = () => dispatch(signOut())

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        signOutAction();
        console.log(auth);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
                Sign Out
                <Button type={'submit'} disabled={submitted} color={submitted ? "gray" : "black"}>{submitted ? 'Sending...' : 'Send'}</Button>
        </StyledForm>
    );
}

export default SignOut;
