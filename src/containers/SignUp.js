import React from 'react';
import Input from '../components/Forms/Input/Input';


const SignUp = ({ value  }) => {

    const handleChange = (event) => {
        console.log(event)
    }
    return (
        <div>
            <Input label={'E-mail'} forName={'signUpEmail'} type={"email"} placeholder="press your e-mail..." value={handleChange} />
            <Input label={'Password'} forName={'signUpPassword'} type={"password"} placeholder="press your password..." value={handleChange} />
        
        </div>
    );
}

export default SignUp;
