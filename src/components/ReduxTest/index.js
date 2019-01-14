import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Counter from './counter';
console.log(store);

const ReduxTest = () => {
    return (
        <Provider store={store}>
            <>
                <div>ReduxTest</div>
                <Counter/>
            </>
        </Provider>
    );
};

export default ReduxTest;
