import Message from '../atoms/Message';
import Row from '../atoms/Row';
import Column from '../atoms/Column';

const MessageBlock = (props) => {
    return (
        <Row>
            <Column>
                <Message>
                    {props.message}
                </Message>
            </Column>
        </Row>
    )
}

export default MessageBlock;