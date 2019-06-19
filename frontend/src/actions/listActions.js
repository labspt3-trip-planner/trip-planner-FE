import { axios } from '../Axios/index';

// GET LIST
export const FETCH_LISTS = 'FETCH_LISTS';
export const LISTS = 'LISTS';
export const LISTS_ERROR = 'LISTS_ERROR';

//GET SINGLE LIST
export const FETCH_ONE = 'FETCH_ONE';
export const ONE_FETCHED = 'ONE_FETCHED';
export const ONE_ERROR = 'ONE_ERROR';

//CREATE LIST
export const CREATE_LIST = 'CREATE_LIST';
export const LIST_CREATED = 'LIST_CREATED';
export const LIST_ERROR = 'LIST_ERROR';

//EDIT LIST
export const EDIT_LIST = 'EDIT_LIST';
export const LIST_EDITED = 'LIST_EDITED';
export const EDIT_ERROR = 'EDIT_ERROR';

//DELETE LIST
export const DELETE_LIST = 'DELETE_LIST';
export const LIST_DELETED = 'LIST_DELETED';
export const DELETE_ERROR = 'DELETE_ERROR';



// GET LIST
export const getLists = () => (dispatch) => {
    dispatch({ type: FETCH_LISTS });
axios({
    method: 'GET',
    url: '/:tripId/lists',
    headers: { token: localStorage.getItem('userToken')}
})
.then((res) => {
    dispatch({ type: LISTS, payload: res.data });
})
.catch((err) => {
    dispatch({ type: LISTS_ERROR, payload: err })
})
};

//GET SINGLE LIST