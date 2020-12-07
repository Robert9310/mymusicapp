import styled from 'styled-components';

const Image=styled.img.attrs(props=>({
    src:props.src,
    alt:props.alt
}))`
    max-width:${props=> props.typeImage === 'iconLink' ? '4rem':''};
`;

export default Image;