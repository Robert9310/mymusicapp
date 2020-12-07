import React from 'react';
import BackNavBar from '../molecules/BackNavBar';
import MessageBlock from '../molecules/MessageBlock';
import Login from '../layouts/Login';
import Footer from '../atoms/Footer';
import Message from '../atoms/Message';


const Redirect = ({header,children,footer}) => {
    return(
        <Login
        header = {<BackNavBar backTo="/"></BackNavBar>}
        footer = {<Footer></Footer>}
        >
            <article>
                    <MessageBlock message="Redirect"></MessageBlock>
            </article>
        </Login>
    )
}

export default Redirect;