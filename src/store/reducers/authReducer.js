import * as actions from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false
}

const authStart = state => {
    return { ...state, loading: true };
};

const authEnd = state => {
    return { ...state, loading: false };
};
  
const authFail = (state, payload) => {
    return { ...state, error: payload };
};

const authSuccess = state => {
    return { ...state, error: false };
};