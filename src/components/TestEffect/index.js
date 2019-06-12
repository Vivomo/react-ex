import React, {useState, useEffect, useRef} from 'react';

const TestEffect = () => {
    let [num, setNum] = useState(0);
    let [obj, setObj] = useState({num: 0});

    let fleshNum = useRef(num);

    let delayLog = () => {
        setTimeout(() => {
            console.log(num);
        }, 3000);
    };

    let delayLog2 = () => {
        setTimeout(() => {
            console.log(JSON.stringify(obj), obj);
        }, 3000);
    };

    useEffect(() => {
        fleshNum.current = num;
        setTimeout(() => {
            console.log(num, 'num in setTimeout');
            console.log(fleshNum.current, 'flesh num');
        }, 3000);
    });

    return (
        <div>
            <span>num: {num}</span>
            <button onClick={() => setNum(num + 1)}>add num</button>
            <button onClick={delayLog}>log</button>

            <br/>
            <span>obj.num: {obj.num}</span>

            <button onClick={() => {
                obj.num++;
                setObj({...obj});
            }}>add obj.num</button>
            <button onClick={delayLog2}>log obj</button>
        </div>
    );
};

export default TestEffect;
