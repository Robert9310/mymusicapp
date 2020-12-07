import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
    type:props.type,
    id:props.id,
    name:props.name,
    placeholder:props.placeholder
}))`
    font-size:1rem;
    display:block;
    margin:auto;
    width:100%;
    box-sizing:border-box;
    height:2.5rem;
    padding:5px;
`;

export default Input;