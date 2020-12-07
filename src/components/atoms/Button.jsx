import * as colors from '../../styles/base/colors';
import * as fonts from '../../styles/base/fonts';
import styled from 'styled-components';

const Button = styled.button.attrs(props =>({
    type:props.type,
    onClick : props.onClick
}))`
    font-family:${fonts.TEXT_FONTS};
    background-color:${colors.PRIMARY_GREEN};
    color:${colors.WHITE};
    font-size:1rem;
    box-sizing:border-box;
    border:none;
    width:100%;
    border-radius:${props => props.style.borderRadius};
    height:${props=>props.style.height};
`;

Button.defaultProps ={
    style : {
        borderRadius:'none',
        height:'2.5rem'
    }
}

export default Button;