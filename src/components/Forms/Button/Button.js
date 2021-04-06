import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    outline: none;
    padding: 1.2rem 2rem;
    border: none;
    background-color: #506591;
    color: white;
`


const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );  
}
export default Button;
