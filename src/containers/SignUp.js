import React, { useState } from 'react';
import Input from '../components/Forms/Input/Input';
import Button from '../components/Forms/Button/Button';
import { signUp } from "../store/actions/authActions";
import { connect } from "react-redux";
import { StyledForm } from '../hoc/form';

const SignUp = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword]  = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        props.signUp({ signUpEmail, signUpPassword})
    }

    const handleInputs = (event) => {
        
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input label={'E-mail'} forName={'signUpEmail'} type={"email"} placeholder="press your e-mail..." value={(e) => setSignUpEmail(e)} />
            <Input label={'Password'} forName={'signUpPassword'} type={"password"} placeholder="press your password..." value={(e) => setSignUpPassword(e)} />
            <Button type={'submit'} disabled={submitted} color={submitted ? "gray" : "black"}>{submitted ? 'Sending...' : 'Send'}</Button>
        </StyledForm>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (user) => {console.log(user); dispatch(signUp(user))},
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
