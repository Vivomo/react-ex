import {useControllableValue} from '@umijs/hooks';
import {Input} from 'antd';
import React from 'react';

const InputItem = (props) => {
    let [value, setValue] = useControllableValue(props);
    return (
        <Input value={value} onChange={(e) => {
            setValue(e.target.value);
        }}/>
    );
};

export default InputItem;