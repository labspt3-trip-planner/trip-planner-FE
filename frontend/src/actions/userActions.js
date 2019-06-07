import axios from 'axios';

// LOGGING IN
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING_ERROR = 'LOGGING_ERROR';

// REGISTERING
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const CREATING_ERROR = 'CREATING_ERROR';

// LOGGING OUT
export const SIGNOUT = 'SIGNOUT';

//const api = 'https://labspt3-trip-planner.herokuapp.com/';

export const login = user => (dispatch) => {
    dispatch ({ type: LOGGING_IN });
    return (
        axios
        .post('https://labspt3-trip-planner.herokuapp.com/auth/login', user)
        .then((res) => {
            localStorage.setItem('userToken', res.data.userToken);
            localStorage.setItem('username', user.username);
            dispatch({ type: LOGGED_IN, payload: res.data, user });
        })
        .catch((err) => {
            dispatch({ type: LOGGING_ERROR, payload: err });
        })
    );    
};

export const createUser = user => (dispatch) => {
    dispatch({ type: CREATING_ACCOUNT });
    return (
        axios
        .post('https://labspt3-trip-planner.herokuapp.com/auth/register', user)
        .then((res) => {
            dispatch({ type: ACCOUNT_CREATED, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: CREATING_ERROR, payload: err });
        })
    );     
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    dispatch({ type: SIGNOUT });
};