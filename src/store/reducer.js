import {handleActions} from 'redux-actions';

const defaultState = {
    globalCount: 0
};

export default handleActions({
    setGlobalCount: (state, {payload}) => ({
        ...state,
        globalCount: payload.globalCount
    })
}, defaultState);

