import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Anchor = styled(Link)`
    color:${props => props.color};
    font-family:arial;
    text-decoration:none;
    
    &:hover{
        text-decoration:underline;
    }
`;

export default Anchor;