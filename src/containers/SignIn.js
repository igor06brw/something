import React, { useState } from 'react';
import Input from '../components/Forms/Input/Input';
import Button from '../components/Forms/Button/Button';
import { signIn } from "../store/actions/authActions";
import { connect, useDispatch, useSelector } from "react-redux";
import { StyledForm } from '../hoc/form';

const SignIn = (props) => {

    const [submitted, setSubmitted] = useState(false);
    const [signInData, setSignInData] = useState({
        email : "",
        password : ""
    })
    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth.uid)
    const signInAction = (data) => dispatch(signIn(data))
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        signInAction(signInData);
        console.log(auth);
    }

    const handleChanges = (e) => {
        const {id, value} = e.target
        setSignInData(prevState => ({
            ...prevState,
            [id] : value
        }))       
    }

    return (
            <StyledForm onSubmit={handleSubmit}>
                Sign In
                <Input label={'E-mail'} forName={'email'} type={"email"} id="email" placeholder="press your e-mail..." value={signIn.email} onChange={handleChanges}/>
                <Input label={'Password'} forName={'password'} type={"password"} id="password" placeholder="press your password..." value={signIn.password} onChange={handleChanges}/>
                <Button type={'submit'} disabled={submitted} color={submitted ? "gray" : "black"}>{submitted ? 'Sending...' : 'Send'}</Button>
            </StyledForm>
    );
}

export default SignIn;
