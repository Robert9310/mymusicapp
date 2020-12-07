import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
    margin-bottom:10px;
    margin-top:10px;
    text-align:${props => props.align};
`;

Row.propTypes = {
    align:PropTypes.string
}

export default Row;