import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
`;

const Title = styled.h1`
    color: blue;
    &:hover {
        color: gray;
    }
`;

const Home = () => {
    return (
        <>
            <GlobalStyle />
            <Title>Home</Title>
            <Link to="/counter">Counter</Link>
        </>
    );
};

export default Home;
