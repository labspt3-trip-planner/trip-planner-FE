import { axiosConfig } from '../../components/Axios';

// GET FAVES
export const FETCH_FAVES = 'FETCH_FAVE';
export const FAVES = 'FAVES';
export const FAVES_ERROR = 'FAVES_ERROR';

// CREATE FAVES
export const CREATE_FAVE = 'CREATING_FAVE';
export const FAVE_CREATED = 'FAVE_CREATED';
export const CREATE_ERROR = 'FAVE_ERROR';

// DELETE TRIPS
export const DELETE_FAVE = 'DELETE_FAVE';
export const FAVE_DELETED = 'FAVE_DELETED';
export const DELETE_ERROR = 'DELETE_ERROR';


export const getFaves = () => (dispatch) => {
    dispatch({ type: FETCH_FAVES });
    axiosConfig
        .get('/favorites')
        .then((res) => {
            dispatch({ type: FAVES, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: FAVES_ERROR, payload: err });
        })
};

export const addFaveToTrip = newFave => (dispatch) => {
    dispatch({ type: CREATE_FAVE });
    return (
        axiosConfig
            .post('/favorites', newFave)
            .then((res) => {
                dispatch({ type: FAVE_CREATED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: CREATE_ERROR, payload: err });
            })
    );
};

export const delFaveFromTrip = tripID => (dispatch) => {
    dispatch({ type: DELETE_FAVE });
    return (
        axiosConfig
            .delete('/favorites/' + tripID)
            .then((res) => {
                dispatch({ type: FAVE_DELETED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: DELETE_ERROR, payload: err });
            })
    );
};