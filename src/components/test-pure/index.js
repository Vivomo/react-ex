import React, {PureComponent} from 'react';

class TestPure extends PureComponent {
    state = {
        arr: [1]
    };

    render() {
        return (
            <div>
                arr{this.state.arr.join('-')}
                <br/>
                <button
                    onClick={() => {
                        let arr = this.state.arr;
                        arr.push(arr.length + 1);
                        this.setState({arr});
                    }}
                >原地址引用</button>

                <button
                    onClick={() => {
                        let arr = this.state.arr;
                        arr.push(arr.length + 1);
                        this.setState({arr: [...arr]});
                    }}
                >创建新对象</button>
            </div>
        );
    }
}


export default TestPure;
