import React from 'react';
import BackNavBar from '../molecules/BackNavBar';
import LoginForm from '../organism/LoginForm';
import Login from '../layouts/Login';
import Footer from '../atoms/Footer';


const LoginPage = ({header,children,footer}) => {
    return(
        <Login
        header = {<BackNavBar backTo="/"></BackNavBar>}
        footer = {<Footer></Footer>}
        >
            <article>
                    <h2>Login</h2>
                    <LoginForm></LoginForm>
            </article>
        </Login>
    )
}

export default LoginPage;