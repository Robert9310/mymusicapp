import Row from '../atoms/Row';
import Column from '../atoms/Column';
import Anchor from '../atoms/Anchor';


const LinkText = (props) =>{
    return(
        <Row align={props.LinkTextAttr.align}>
            <Column>
                <Anchor to={props.LinkTextAttr.href} color={props.LinkTextAttr.color}>{props.LinkTextAttr.text}</Anchor>
            </Column>
        </Row>
    );
}

export default LinkText;