import React, { useState } from 'react';
import Input from '../components/Forms/Input/Input';
import Button from '../components/Forms/Button/Button';
import { signUp } from "../store/actions/authActions";
import { connect, useDispatch } from "react-redux";
import { StyledForm } from '../hoc/form';

const SignUp = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [signUpData, setSignUpData] = useState({
        email : "",
        password : ""
    })
    const dispatch = useDispatch();
    const signUpAction = (data) => dispatch(signUp(data))

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        signUpAction(signUpData);
    }

    const handleChanges = (e) => {
        const {id, value} = e.target
        setSignUpData(prevState => ({
            ...prevState,
            [id] : value
        }))       
    }

    return (
            <StyledForm onSubmit={handleSubmit}>
                Sign Up
                <Input label={'E-mail'} forName={'email'} type={"email"} id="email" placeholder="press your e-mail..." value={signUp.email} onChange={handleChanges}/>
                <Input label={'Password'} forName={'password'} type={"password"} id="password" placeholder="press your password..." value={signUp.password} onChange={handleChanges}/>
                <Button type={'submit'} disabled={submitted} color={submitted ? "gray" : "black"}>{submitted ? 'Sending...' : 'Send'}</Button>
            </StyledForm>
    );
}

export default SignUp
