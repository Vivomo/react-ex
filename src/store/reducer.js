import {handleActions} from 'redux-actions';

const defaultState = {
    globalCount: 0
};

export default handleActions({
    SET_GLOBAL_COUNT: (state, {payload}) => ({
        ...state,
        globalCount: payload.value
    })
}, defaultState);

