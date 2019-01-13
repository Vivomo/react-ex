import React, {Component} from 'react';

class SetState extends Component {

    num = 1;
    state = {
        num: 1
    };

    render() {
        console.log('render');
        return (
            <div>
                <ul>
                    <li>state.num: {this.state.num}</li>
                    <li>this.num: {this.num}</li>
                </ul>
                <button onClick={() => this.setState({num: this.state.num + 1})}>setState add num</button>
                <button onClick={() => this.num++}>this.num++</button>
                <button onClick={() => this.setState({})}>setState {}</button>
                <button onClick={() => this.setState()}>setState no args</button>
                <button onClick={() => {
                    this.setState({});
                    this.setState({});
                }}>setEmptyState twice</button>
            </div>
        );
    }
}

export default SetState;