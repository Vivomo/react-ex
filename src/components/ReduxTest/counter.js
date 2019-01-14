import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCount} from '../../store/action';
import {bindActionCreators} from 'redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={() => this.props.setCount(this.props.count + 1)}>count++</button>
            </div>
        );
    }
}

const mapStateToProps = ({globalCount}) => {
    return {
        count: globalCount
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setCount
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
