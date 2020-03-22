import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Counter from './counter';
import CounterWap from './counterWrap';

const ReduxTest = () => {
    return (
        <Provider store={store}>
            <>
                <div>ReduxTest</div>
                <CounterWap>
                    <Counter/>
                </CounterWap>
            </>
        </Provider>
    );
};

export default ReduxTest;
