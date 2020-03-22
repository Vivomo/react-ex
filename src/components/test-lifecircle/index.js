import React, {Component} from 'react';

class TestLifeCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('getDerivedStateFromProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                <span>
                    <span>{this.state.num}</span>
                </span>
                <button onClick={() => {
                    this.setState({
                        num: this.state.num + 1
                    });
                }}>add</button>
            </div>
        );
    }
}


export default TestLifeCircle;
