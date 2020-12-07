import InputField from '../molecules/InputField';
import LinkText from '../molecules/LinkText';
import ButtonSet from '../molecules/ButtonSet';
import styled from 'styled-components';

import {authEndpoint , clientId , redirectUri} from '../../utils/configSpotify';

import * as colors from '../../styles/base/colors';

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const inputUserName = {
    labelText:'Email address or username',
    labelHtmlFor:'username',
    inputPlaceholder:'Email address or username',
    inputType:'text',
    inputId:'username',
    inputName:'username'
}

const inputPassword = {
    labelText:'Password',
    labelHtmlFor:'password',
    inputPlaceholder:'Password',
    inputType:'password',
    inputId:'password',
    inputName:'password'
}

const linkTextAttr = {
    href:'/',
    color : colors.BLACK,
    align:'left',
    text: 'Forgot your password?'
}


const handleLogin = (event) => {
    console.log(clientId);
    event.preventDefault();
    console.log(event)
    window.location =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
}

const buttonAttr = {
    textButton:'Login',
    buttonStyle : {
        borderRadius:'20px',
        height:'2.5rem'
    },
    type:"submit",
    onClick:handleLogin
}


const LoginForm = () =>{

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.username.value);
    }

    return(
        <Form>
            {/* <InputField inputFieldAttr={inputUserName}></InputField>
            <InputField inputFieldAttr={inputPassword}></InputField> */}
            <LinkText LinkTextAttr={linkTextAttr}></LinkText>
            <ButtonSet ButtonAttr={buttonAttr}></ButtonSet>
        </Form>
    );
}

export default LoginForm;