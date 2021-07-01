import React, { useState } from 'react';

const Update = () => {

    const [num, setNum] = useState(0);

    const update = () => {
        setTimeout(() => {
            setNum(1);
            console.time('a');
            Array(500000).fill(0).map(_ => Math.random()).sort();
            console.timeEnd('a');
            setNum(2);
        });


    };

    return (
        <div>
            {
                num === 1 && <span>{num}</span>
            }

            <button onClick={update}>update</button>
        </div>
    );
};

export default Update;