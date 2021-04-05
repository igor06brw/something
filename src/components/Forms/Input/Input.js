import React, { useState } from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 10px;
`
const Label = styled.label`
    padding-bottom: 10px;
`
const InputField = styled.input`

`

const Input = ({ value, label, forName, type, placeholder }) => {
    const handleChange = (event) => {
        value(event.target.value)
    }

    return (
        <InputContainer>
            <Label for={forName}>{label}</Label>
            <InputField name={forName} type={type} placeholder={placeholder} onChange={(e) => handleChange(e)} />
        </InputContainer>
    );
}

export default Input;
