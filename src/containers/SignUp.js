import React from 'react';
import Input from '../components/Forms/Input/Input';
import Button from '../components/Forms/Button/Button';

import { StyledForm } from '../hoc/form';

const SignUp = ({ value }) => {

    const handleChange = (event) => {
        console.log(event)
    }
    return (
        <StyledForm>
            <Input label={'E-mail'} forName={'signUpEmail'} type={"email"} placeholder="press your e-mail..." value={handleChange} />
            <Input label={'Password'} forName={'signUpPassword'} type={"password"} placeholder="press your password..." value={handleChange} />
            <Button>Sign Up</Button>
        </StyledForm>
    );
}

export default SignUp;
