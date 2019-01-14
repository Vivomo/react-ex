import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
console.log(store);

const ReduxTest = () => {
    return (
        <Provider store={store}>
            <div>ReduxTest</div>
        </Provider>
    );
};

export default ReduxTest;
