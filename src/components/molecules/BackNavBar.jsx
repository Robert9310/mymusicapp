import React from 'react';
import NavBar from '../atoms/Navbar';
import Anchor from '../atoms/Anchor';
import Image from '../atoms/Image';
import logoNav from '../../images/logoInvertBlack.png'
import PropTypes from 'prop-types';
import * as colors from '../../styles/base/colors';


const theme = {
    colorTextSecondary:colors.BLACK,
    colorPrimary: colors.WHITE
}


const BackNavBar = (props) =>{
   return(
    <NavBar>
        <Anchor to={props.backTo} color={theme.colorPrimary}> <Image src={logoNav} typeImage={'iconLink'}></Image> </Anchor>
    </NavBar>
   ); 
}

BackNavBar.propTypes = {
    backTo : PropTypes.string
}
export default BackNavBar;