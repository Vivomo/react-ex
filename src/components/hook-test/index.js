import React from 'react';
import {useState} from 'react';


const HooksTest = () => {
    let [num, setNum] = useState(0);

    console.log(setNum);
    return (
        <div>
            <button onClick={() => {
                setNum(num + 1);
            }}>Number ++</button>
            {num}
        </div>
    );
};

export default HooksTest;
