import thunk from 'redux-thunk';

import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import reducer from './reducer';

export default createStore(reducer, compose(
    applyMiddleware(thunk)
));
