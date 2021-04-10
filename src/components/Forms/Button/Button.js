import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    outline: none;
    padding: 1.2rem 2rem;
    border: none;
    background-color: #506591;
    color: white;
`


const Button = ({ type, disabled, color, children }) => {
    
    return (
        <StyledButton type={type} disabled={disabled} style={{backgroundColor: color}}>
            {children}
        </StyledButton>
    );  
}
export default Button;
