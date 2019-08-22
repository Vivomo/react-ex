import React, {Component} from 'react';
import { Modal} from 'antd';
import PortalsDialog from '../PortalsDialog';
import 'antd/lib/modal/style/css';

class TestModal extends Component {
    state = {
        visible: false,
        portalsVisible: false
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
                <button onClick={() => this.setState({portalsVisible: true})}>portals</button>
                <PortalsDialog
                    visible={this.state.portalsVisible}
                    onCancel={() => this.setState({portalsVisible: false})}
                />
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
