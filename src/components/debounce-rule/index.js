import React from 'react';
import { Form, InputNumber } from 'antd';
import { debounce } from 'lodash';

const DebounceRule = () => {
    let isEvent = debounce((num, reject) => {
        console.log(num);
        if (num % 2) {
            reject('必须是偶数');
        }
    }, 3000);

    return (
        <Form>
            <Form.Item
                name="number"
                rules={[
                    {
                        validator: (rule, value) => {
                            return new Promise((resolve, reject) => {
                                isEvent(value, reject);
                            });
                        }
                    }
                ]}
            >
                <InputNumber />
            </Form.Item>
        </Form>
    );
};

export default DebounceRule;