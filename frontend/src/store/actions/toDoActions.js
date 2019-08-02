import { axiosConfig } from '../../components/Axios';

// GET FAVES
export const FETCH_PACKING_LIST = 'FETCH_TODO_LIST';
export const PACKING = 'TODO';
export const PACKING_ERROR = 'TODO_ERROR';

// CREATE FAVES
export const CREATE_PACKING_LIST = 'CREATE_TODO_LIST';
export const PACKING_LIST_CREATED = 'TODO_LIST_CREATED';
export const PACKING_LIST_ERROR = 'TODO_LIST_ERROR';

// DELETE TRIPS
export const DELETE_FAVE = 'DELETE_TODO_LIST';
export const FAVE_DELETED = 'TODO_LIST_DELETED';
export const DELETE_ERROR = 'DELETE_TODO_ERROR';


export const getToDo = () => (dispatch) => {
    dispatch({ type: FETCH_TODO_LIST });
    axiosConfig
        .get('/todo')
        .then((res) => {
            dispatch({ type: TODO, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: TODO_ERROR, payload: err });
        })
};

export const addToDoToTrip = newToDoList => (dispatch) => {
    dispatch({ type: CREATE_TODO_LIST });
    return (
        axiosConfig
            .post('/todo', newToDoList)
            .then((res) => {
                dispatch({ type: TODO_LIST_CREATED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: TODO_LIST_ERROR, payload: err });
            })
    );
};

export const delToDoFromTrip = tripID => (dispatch) => {
    dispatch({ type: DELETE_TODO_LIST });
    return (
        axiosConfig
            .delete('/todo/' + tripID)
            .then((res) => {
                dispatch({ type: TODO_LIST_DELETED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: DELETE_TODO_ERROR, payload: err });
            })
    );
};