import React from 'react';
import styled from 'styled-components';
import BackNavBar from '../molecules/BackNavBar';
import LoginForm from '../organism/LoginForm';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Main from '../atoms/Main';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
box-sizing: border-box;
`;
const Login = ({header,children,footer,...props}) => {
    return(
        <Wrapper {...props}>
            <Header>
                {header}
            </Header>
            <Main>
                {children}
            </Main>
            <Footer>
                {footer}
            </Footer>
        </Wrapper>
    )
}

export default Login;