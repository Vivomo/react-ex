import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterWrap extends Component {
    getChildContext() {
        return { count: 10, count2: 20 };
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

CounterWrap.childContextTypes = {
    count: PropTypes.number,
    count2: PropTypes.number
};

export default CounterWrap;
