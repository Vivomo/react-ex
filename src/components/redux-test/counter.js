import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setCount} from '../../store/action';
import {bindActionCreators} from 'redux';
import store from '../../store';

class Counter extends Component {
    state = {
        unusedNum: 1
    };
    render() {
        console.log(this.context);
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={() => this.props.setCount(this.props.count + 1)}>count++</button>
                <button onClick={() => {
                    store.dispatch({
                        type: 'SET_GLOBAL_COUNT',
                        payload: {
                            value: 10
                        }
                    });
                }}>store dispatch</button>
                <button onClick={() => {
                    this.setState({});
                }}>setState</button>
            </div>
        );
    }
}

Counter.contextTypes = {
    count: PropTypes.number,
    count2: PropTypes.number
};

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
