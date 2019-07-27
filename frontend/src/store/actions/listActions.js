import { axiosConfig, axios } from "../../components/Axios";

// GET LIST
export const FETCH_LISTS = "FETCH_LISTS";
export const LISTS = "LISTS";
export const LISTS_ERROR = "LISTS_ERROR";

//GET SINGLE LIST
export const FETCH_ONE = "FETCH_ONE";
export const ONE_FETCHED = "ONE_FETCHED";
export const ONE_ERROR = "ONE_ERROR";

//CREATE LIST
export const CREATE_LIST = "CREATE_LIST";
export const LIST_CREATED = "LIST_CREATED";
export const LIST_ERROR = "LIST_ERROR";

//EDIT LIST
export const EDIT_LIST = "EDIT_LIST";
export const LIST_EDITED = "LIST_EDITED";
export const EDIT_ERROR = "EDIT_ERROR";

//DELETE LIST
export const DELETE_LIST = "DELETE_LIST";
export const LIST_DELETED = "LIST_DELETED";
export const DELETE_ERROR = "DELETE_ERROR";

// GET LIST
export const getList = () => dispatch => {
	dispatch({ type: FETCH_LISTS });
	axios({
		method: "GET",
		url: "/tripId/lists/:listName"
	})
		.then(res => {
			dispatch({ type: LISTS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: LISTS_ERROR, payload: err });
		});
};

//ADD NEW LIST
export const addList = newList => dispatch => {
	dispatch({ type: CREATE_LIST });
	return axiosConfig
		.post("/:tripId/lists", newList)
		.then(res => {
			dispatch({ type: LIST_CREATED, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: LIST_ERROR, payload: err });
		});
};

//UPDATE LIST
export const updateList = list => dispatch => {
	dispatch({ type: EDIT_LIST });
	return axiosConfig
		.put("tripId/lists/:itemId", list)
		.then(res => {
			dispatch({ type: LIST_EDITED, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: EDIT_ERROR, payload: err });
		});
};

//DELETE LIST
export const deleteList = tripId => dispatch => {
	dispatch({ type: DELETE_LIST });
	return axiosConfig
		.delete("/:tripId/lists/:itemId" + tripId, {})
		.then(res => {
			dispatch({ type: LIST_DELETED, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: DELETE_ERROR, payload: err });
		});
};
