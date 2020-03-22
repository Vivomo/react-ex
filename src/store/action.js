import {createAction} from 'redux-actions';

export const setCount = (value) => dispatch => dispatch(createAction('SET_GLOBAL_COUNT')({value}));
