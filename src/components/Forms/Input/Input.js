import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`

`
const Label = styled.label`

`
const InputField = styled.input`

`

const Input = ({ value, label, name, type, placeholder }) => {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputField />
        </InputContainer>
    );
}

export default Input;
