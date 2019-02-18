import React, {Component} from 'react';
import { Modal} from 'antd';
import 'antd/lib/modal/style/css';

class TestModal extends Component {
    state = {
        visible: false
    };

    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    };

    show = () => {
        this.setState({
            visible: true
        });
    };


    render() {
        return (
            <div>
                <button onClick={this.show}>show</button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default TestModal;
