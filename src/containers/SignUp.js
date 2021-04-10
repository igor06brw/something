import React, { useState } from 'react';
import Input from '../components/Forms/Input/Input';
import Button from '../components/Forms/Button/Button';

import { StyledForm } from '../hoc/form';

const SignUp = () => {
    const [submitted, setSubmitted] = useState(false);
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword]  = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log({signUpEmail, signUpPassword, submitted})
        if(submitted === true) {
            setInterval(setSubmitted(false), 100);
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input label={'E-mail'} forName={'signUpEmail'} type={"email"} placeholder="press your e-mail..." value={(e) => setSignUpEmail(e)} />
            <Input label={'Password'} forName={'signUpPassword'} type={"password"} placeholder="press your password..." value={(e) => setSignUpPassword(e)} />
            <Button type={'submit'} disabled={submitted ? 'disabled' : null} color={submitted ? "gray" : "black"}>Sign Up</Button>
        </StyledForm>
    );
}

export default SignUp;
