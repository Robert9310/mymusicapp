import { Route } from 'react-router-dom';
import React from 'react';
import LoginPage from '../components/pages/LoginPage';
import Redirect from '../components/pages/Redirect';
import DashBoard from '../components/pages/DashBoard';
import NotFoundPage from '../components/pages/NotFoundPage';

const LoginRouter = () =>{
    return(
        
        <React.Fragment>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/redirect">
                <Redirect/>
            </Route>
            <Route exact path="/dashboard">
                <DashBoard/>
            </Route>
            <Route exact path="/notfoundpage">
                <NotFoundPage/>
            </Route>
        </React.Fragment>
                
    );
}

export default LoginRouter ;