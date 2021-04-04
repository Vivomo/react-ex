import React, {useState} from 'react';
import {Button, Table, Tag, Checkbox, Space} from 'antd';

let initData = Array(90).fill(0).map((item, index) => ({
    day: index + 1
}));

let createProduct = (cost, dayIncome, index) => Object.freeze({cost, dayIncome, index});
let limit = {
    100000: 1,
    10000: 1,
    5000: 1,
    1000: 2,
    500: 2,
    100: 4,
    10: 8
};
let products = [
    createProduct(100000, 1520, 0),
    createProduct(10000, 148, 1),
    createProduct(5000, 72, 2),
    createProduct(1000, 14, 3),
    createProduct(500, 6.8, 4),
    createProduct(100, 1.32, 5),
    createProduct(10, 0.132, 6),
];


export default () => {

    let [cmbProducts, setCmbProducts] = useState([]);
    let [onlyNewProduct, setOnlyNewProduct] = useState(false);

    let removeProduct = (product) => {
        cmbProducts.splice(cmbProducts.indexOf(product), 1);
        setCmbProducts([...cmbProducts]);
    };

    let score = 10000;

    let columns = [
        {
            title: '天数',
            dataIndex: 'day',
        },
        {
            title: '积分',
            dataIndex: 'score',
            render(text, record) {
                cmbProducts.filter(product => product.createTime === record.day).forEach(product => {
                    score -= product.cost;
                });
                cmbProducts.filter(product => product.createTime <= record.day).forEach(product => {
                    score += product.dayIncome;
                });
                return Number(score.toFixed(3));
            }
        },
        {
            title: 
                <Space>
                    产品
                    <Checkbox onChange={({target}) => {
                        setOnlyNewProduct(target.checked);
                    }}>只显示新添加</Checkbox>
                </Space>,            
            key: 'products',
            width: 600,
            render: (products, record) => {
                return (
                    <>
                        {
                            cmbProducts
                                .filter(product => product.createTime <= record.day && (onlyNewProduct ? product.createTime === record.day : true))
                                .sort((a, b) => b.cost - a.cost)
                                .map((product) => <Tag key={product.id} color={product.createTime === record.day ? 'green' : ''}
                                    closable onClose={() => {
                                        removeProduct(product);
                                    }}>{product.cost}</Tag>)
                        }
                    </>
                );
            }
        },
        {
            title: '日收益',
            render(text, record) {
                return cmbProducts.filter(product => product.createTime <= record.day)
                    .reduce((prev, cur) => prev + cur.dayIncome, 0);
            }
        },
        {
            title: '可添加',
            key: 'opt',
            render: (text, record) => <Space>
                {
                    products.filter(product => {
                        return product.cost <= score &&
                                cmbProducts.filter(elemProduct => product.cost === elemProduct.cost).length < limit[product.cost];
                    }).map((product, index) => <Button
                        key={index}
                        onClick={() => setCmbProducts(cmbProducts.filter(product => product.createTime <= record.day)
                            .concat({...product, createTime: record.day, id: Math.random()}))
                        }
                    >{product.cost}
                    </Button>)
                }
            </Space>
            
        }
    ];


    return (
        <Table
            rowKey="day"
            dataSource={initData}
            columns={columns}
            pagination={false}
        />
    );
};