import React, {useState} from 'react';

const TestEffect = () => {
    let [num, setNum] = useState(0);

    let delayLog = () => {
        setTimeout(() => {
            console.log(num);
        }, 3000);
    };

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>add</button>
            <button onClick={delayLog}>log</button>
        </div>
    );
};

export default TestEffect;
