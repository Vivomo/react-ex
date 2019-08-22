import React, {Component} from 'react';

class TestForceUpdate extends Component {
    count = 1;
    
    add = () => {
        this.count++;
        this.forceUpdate();
    };
    
    render() {
        return (
            <button onClick={this.add}>
                count:{this.count}
            </button>
        );
    }
}

export default TestForceUpdate;
