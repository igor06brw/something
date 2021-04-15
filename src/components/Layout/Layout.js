import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../Navigation/Navigation';

const LayoutWrapper = styled.main`
`

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <main>
                { children }
            </main>
        </>
    );
}

export default Layout;
