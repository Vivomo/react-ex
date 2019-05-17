import React, {Component} from 'react';

const TestProps = ({count}) => {
    console.log('test props render');
    return <button>count btn:{count}</button>;
};

class SetState extends Component {

    num = 1;
    state = {
        num: 1,
        arr: [1]
    };

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        return {
            num: 5
        };
    }

    render() {
        console.log('render');
        return (
            <div>
                <ul>
                    <li>state.num: {this.state.num}</li>
                    <li>this.num: {this.num}</li>
                    <li><TestProps count={this.state.num}/></li>
                </ul>
                <div>
                    <button onClick={() => this.setState({num: this.state.num + 1})}>setState add num</button>
                    <button onClick={() => this.num++}>this.num++</button>
                    <button onClick={() => this.setState({})}>setState {}</button>
                    <button onClick={() => this.setState()}>setState no args</button>
                    <button onClick={() => {
                        this.setState({});
                        this.setState({});
                    }}>setEmptyState twice</button>
                    <button disabled={true} onClick={() => {
                        this.setState({});
                    }}>disabled</button>
                </div>
                <div>
                    arr{this.state.arr.join('-')}
                    <br/>
                    <button
                        onClick={() => {
                            let arr = this.state.arr;
                            arr.push(arr.length + 1);
                            this.setState({arr});
                        }}
                    >set arr</button>
                </div>
            </div>
        );
    }
}

export default SetState;
