import Row from '../atoms/Row';
import Column from '../atoms/Column';
import Button from '../atoms/Button';

const ButtonSet = (props) => {
    return (
        <Row>
            <Column>
                <Button type={props.ButtonAttr.type} onClick = {props.ButtonAttr.onClick} style={props.ButtonAttr.buttonStyle}>{props.ButtonAttr.textButton}</Button>
            </Column>
        </Row>
    );
}

export default ButtonSet;
