import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.scss';

class PortalsDialog extends PureComponent {

    init = false;
    wrap = null;

    render() {
        let {visible, onOk, onCancel, title, cancelText, okText} = this.props;
        if (!this.init && visible) {
            this.init = true;
        }

        if (!this.init) {
            return null;
        }

        if (!this.wrap) {
            this.wrap = document.createElement('div');
            document.body.appendChild(this.wrap);
        }

        return ReactDOM.createPortal(
            <div className={`lk-confirm-bg ${visible ? 'show' : 'hide'}`}>
                <div className="confirm-wrap">
                    <h5 className="title">
                        <span>{title}</span>
                        <span className="close iconfont" onClick={onCancel}>󰅕</span>
                    </h5>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <div className="footer">
                        {
                            cancelText ?
                                <button className="lk-btn" onClick={onCancel}>{cancelText}</button>
                                :
                                null
                        }
                        <button className="lk-btn btn-primary" onClick={onOk}>{okText}</button>
                    </div>
                </div>
            </div>
            ,
            this.wrap,
        );
    }
}

PortalsDialog.prototypes = {
    title: PropTypes.string,
    cancelText: PropTypes.string,
    okText: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
};

PortalsDialog.defaultProps = {
    title: '提示',
    cancelText: '取消',
    okText: '确认'
};

export default PortalsDialog;
