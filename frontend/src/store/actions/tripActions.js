import { axiosConfig } from "../../components/Axios";
import axios from "axios";
// GET TRIPS
export const FETCH_TRIPS = "FETCH_TRIPS";
export const TRIPS = "TRIPS";
export const TRIPS_ERROR = "TRIPS_ERROR";

// GET SINGLE TRIP
export const FETCH_SINGLE = "FETCH_SINGLE";
export const SINGLE_FETCHED = "SINGLE_FETCHED";
export const SINGLE_ERROR = "SINGLE_ERROR";

// CREATE TRIPS
export const CREATE_TRIP = "CREATING_TRIP";
export const TRIP_CREATED = "TRIP_CREATED";
export const CREATE_ERROR = "CREATE_ERROR";

// EDIT TRIPS
export const EDIT_TRIP = "EDIT_TRIP";
export const TRIP_EDITED = "TRIP_EDITED";
export const EDIT_ERROR = "EDIT_ERROR";

// DELETE TRIPS
export const DELETE_TRIP = "DELETE_TRIP";
export const TRIP_DELETED = "TRIP_DELETED";
export const DELETE_ERROR = "DELETE_ERROR";

export const getTripsByUser = () => dispatch => {
  dispatch({ type: FETCH_TRIPS });
  return axios({
    method: "get",
    url:
      `${process.env.REACT_APP_DEVELOPMENT}/users/alltrips` ||
      "https://labspt3-trip-planner.herokuapp.com/users/alltrips",
    headers: { Authorization: localStorage.getItem("user") }
  })
    .then(res => {
      dispatch({ type: TRIPS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TRIPS_ERROR, payload: err });
    });
};

export const getTripById = tripId => dispatch => {
  dispatch({ type: FETCH_SINGLE });
  return axiosConfig
    .get(`/trip/${tripId}`)
    .then(res => {
      dispatch({
        type: SINGLE_FETCHED,
        payload: { ...res.data, currentDestination: res.data.destinations[0] }
      });
    })
    .catch(err => {
      dispatch({ type: SINGLE_ERROR, payload: err });
    });
};

export const addTrip = newTrip => dispatch => {
  dispatch({ type: CREATE_TRIP });
  return axios
    .post("/trip", newTrip)
    .then(res => {
      dispatch({ type: TRIP_CREATED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_ERROR, payload: err });
    });
};

export const updateTrip = tripID => dispatch => {
  dispatch({ type: EDIT_TRIP });
  return axios
    .put("/trip" + tripID)
    .then(res => {
      dispatch({ type: TRIP_EDITED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_ERROR, payload: err });
    });
};

export const removeTrip = tripID => dispatch => {
  dispatch({ type: DELETE_TRIP });
  return axios
    .delete("/trip/" + tripID)
    .then(res => {
      dispatch({ type: TRIP_DELETED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_ERROR, payload: err });
    });
};
