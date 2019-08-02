import { axiosConfig } from '../../components/Axios';

// GET FAVES
export const FETCH_PACKING_LIST = 'FETCH_PACKING_LIST';
export const PACKING = 'PACKING';
export const PACKING_ERROR = 'PACKING_ERROR';

// CREATE FAVES
export const CREATE_PACKING_LIST = 'CREATE_PACKING_LIST';
export const PACKING_LIST_CREATED = 'PACKING_LIST_CREATED';
export const PACKING_LIST_ERROR = 'PACKING_LIST_ERROR';

// DELETE TRIPS
export const DELETE_FAVE = 'DELETE_PACKING_LIST';
export const FAVE_DELETED = 'PACKING_LIST_DELETED';
export const DELETE_ERROR = 'DELETE_PACKING_ERROR';


export const getPacking = () => (dispatch) => {
    dispatch({ type: FETCH_PACKING_LIST });
    axiosConfig
        .get('/favorites')
        .then((res) => {
            dispatch({ type: PACKING, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: PACKING_ERROR, payload: err });
        })
};

export const addPackingToTrip = newFave => (dispatch) => {
    dispatch({ type: CREATE_PACKING_LIST });
    return (
        axiosConfig
            .post('/favorites', newPackingList)
            .then((res) => {
                dispatch({ type: PACKING_LIST_CREATED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: PACKING_LIST_ERROR, payload: err });
            })
    );
};

export const delPackingFromTrip = tripID => (dispatch) => {
    dispatch({ type: DELETE_PACKING_LIST });
    return (
        axiosConfig
            .delete('/favorites/' + tripID)
            .then((res) => {
                dispatch({ type: PACKING_LIST_DELETED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: DELETE_PACKING_ERROR, payload: err });
            })
    );
};