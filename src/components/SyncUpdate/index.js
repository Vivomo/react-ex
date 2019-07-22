import React, {useState, useRef, useEffect} from 'react';
import {flushSync} from 'react-dom';

const SyncUpdate = () => {

    let [value, setValue] = useState('');

    return (
        <div>
            <button onClick={() => {
                flushSync(() => setValue(Math.random()));
            }}>设置随机值
            </button>
            <Input value={value} setValue={setValue}/>
            <span>
                <span>{value}</span>
            </span>
            <br/>
            <Input2/>
        </div>
    );
};

const Input = ({value, setValue}) => {
    let inputValue = useRef(value);

    let handleBlur = (e) => {
        console.log(e.target.value, inputValue.current);
        console.time('a');
        setTimeout(() => {
            console.log(inputValue.current);
        }, 150);
    };

    let handleChange = (e) => {
        console.log('change');
        setValue(e.target.value);
    };

    useEffect(() => {
        inputValue.current = value;
        console.timeEnd('a');
    }, [value]);

    return (
        <input type="text" value={value} onBlur={handleBlur} onChange={handleChange}/>
    );
};

class Input2 extends React.Component {
    state = {
        value: ''
    };
    inputRef = React.createRef();
    startTime = 0;

    handleChange = () => {

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.value, 'input2');
        console.timeEnd('b');
        console.log(Date.now() - this.startTime);
    }

    render() {
        return (
            <div>
                <input
                    ref={this.inputRef}
                    type="text" value={this.state.value}
                    onChange={(e) => this.setState({value: e.target.value})}
                    onBlur={() => {
                        console.time('click');
                    }}
                />
                <button onClick={() => {
                    console.time('b');
                    console.timeEnd('click');
                    flushSync(() => {
                        this.startTime = Date.now();
                        this.setState({
                            value: Math.random()
                        });
                        console.log(this.inputRef.current.value, 1);
                    });
                    console.log(Date.now() - this.startTime);
                }}>设置随机值
                </button>
            </div>
        );
    }
}

export default SyncUpdate;
