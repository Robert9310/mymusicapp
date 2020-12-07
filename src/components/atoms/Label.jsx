import styled from 'styled-components';

const Label = styled.label.attrs(props=>({
    htmlFor:props.htmlFor
}))`
    font-weight:700;
    max-width:100%;
    margin-bottom:5px;
    display:inline-block;
`;

export default Label;
