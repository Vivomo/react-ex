import React from 'react';
import {useState} from 'react';

let test = () => {
    let [num, setNum] = useState(0);
    setNum(num + 1);
    console.log(num);
};

const HooksTest = () => {
    let [num, setNum] = useState(0);

    return (
        <div>
            <button onClick={() => {
                test();
                setNum(num + 1);
            }}>Number ++</button>
            {num}
        </div>
    );
};

export default HooksTest;
