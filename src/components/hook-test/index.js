import React, {useState, useEffect, useRef} from 'react';

const formatList = (list) => {

    const intervalRef = useRef(0);
    const [data, setData] = useState({
        data: []
    });

    useEffect(() => {
        if (list.length === 0) {
            return;
        }
        const cacheData = list.map(item => ({
            num: item,
            doubleNum: 0
        }));

        let cursor = 0;
        intervalRef.current = setInterval(() => {
            cacheData[cursor].doubleNum = cacheData[cursor].num * 2;
            setData({
                data: cacheData
            });
            cursor++;
            if (cursor === cacheData.length) {
                clearInterval(intervalRef.current);
            }
        }, 1000);
    }, [list]);
    return data;
};

const HooksTest = () => {

    const [list, setList] = useState([]);

    const {data} = formatList(list);

    useEffect(() => {
        setList(Array(5).fill(0).map((_, index) => index));
    }, []);

    console.log(data);

    return (
        <ul>
            {
                data.map(item => <li key={item.num}>{item.num}: {item.doubleNum}</li>)
            }
        </ul>
    );
};

export default HooksTest;
