import React from 'react';

class AsyncSetState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }

    handleNormalClick = () => {
        this.setState({
            num: this.state.num + 1
        });
        console.log(this.state.num);
    };

    handleSetTimeoutClick = () => {
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            });
            console.log(this.state.num);
        }, 0);
    };

    render() {
        return (
            <div>
                <h2>打开控制台看console log</h2>
                <p>
                    一个数字 <strong>{this.state.num}</strong>
                </p>

                <button onClick={this.handleNormalClick}>普通点击更改setState num+1</button>
                <br/>
                <button onClick={this.handleSetTimeoutClick}>点击 setTimeout 后更改setState num+1</button>
                <pre>
                    ⎛⎝≥⏝⏝O⎠⎞⎛⎝≥⏝⏝O⎠⎞



                    ⎛⎝^⏝⏝^⎠⎛⎝^⏝⏝^⎠⎞

                    ⎛⎝Ͼ⏝⏝Ͽ⎠⎞⎛⎝Ͼ⏝⏝Ͽ⎠⎞

                </pre>
            </div>
        );
    }
}

export default AsyncSetState;