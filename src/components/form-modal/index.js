import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Form, Modal} from 'antd';


const FormModal = (props) => {
    const [visible, setVisible] = useState(true);
    const formRef = useRef(null);
    const handleOnOk = () => {
        console.log(formRef.current.getFieldsValue());
        props.onOk(formRef.current.getFieldsValue());
        setVisible(false);
    };
    return (
        <Modal
            visible={visible}
            onOk={handleOnOk}
            title="测试"
        >
            <Form ref={formRef}>
                <Form.Item label="test" name="test">
                    {props.content}
                </Form.Item>
            </Form>
        </Modal>
    );
};

const formModal = (props) => {
    let {onOk, ...rest} = props;
    let div = document.createElement('div');
    document.body.appendChild(div);

    let clear = () => {
        div.remove();
    };

    const handleOk = props.onOk ? (...args) => {
        props.onOk(...args);
        clear();
    } : clear;

    ReactDOM.render(<FormModal {...rest} onOk={handleOk}/>, div);
};

export default formModal;