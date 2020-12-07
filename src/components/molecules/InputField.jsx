import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Row from '../atoms/Row';
import Column from '../atoms/Column';
import styled from 'styled-components';

const InputField = (props) => {
    return (
        <Row align="left">
                <Column>
                    <Label htmlFor={props.inputFieldAttr.labelHtmlFor}>{props.inputFieldAttr.labelText}</Label>
                    <Input 
                        placeholder={props.inputFieldAttr.inputPlaceholder} 
                        type={props.inputFieldAttr.inputType} 
                        id={props.inputFieldAttr.inputId} 
                        name={props.inputFieldAttr.inputName} 
                        required
                    />
                </Column>
            </Row>
    );
}

export default InputField;
