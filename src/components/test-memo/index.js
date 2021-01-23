import React, {memo, useState} from 'react';

let MemoCmp = memo(() => {
    console.log('memo');
    return <div/>;
});

let Cmp = () => {
    console.log('Cmp');
    return <div/>;
};

let MemoTest = () => {

    let [num, setNum] = useState(0);

    return <>
        <button onClick={() => {
            setNum(num + 1);
        }}>{num}</button>
        <Cmp/>
        <MemoCmp/>
    </>;
};

export default MemoTest;