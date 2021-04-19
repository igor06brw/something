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
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid gray;
`

const Input = ({ value, label, forName, type, placeholder, onChange, id, ...props}) => {
    return (
        <InputContainer>
            <Label for={forName}>{label}</Label>
            <InputField name={forName} type={type} id={id} placeholder={placeholder} onChange={onChange} value={value} />
        </InputContainer>
    );
}

export default Input;
