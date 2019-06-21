import {
    FETCH_TRIPS,
    TRIPS,
    TRIPS_ERROR,
    FETCH_SINGLE,
    SINGLE_FETCHED,
    SINGLE_ERROR,
    CREATE_TRIP,
    TRIP_CREATED,
    CREATE_ERROR,
    EDIT_TRIP,
    TRIP_EDITED,
    EDIT_ERROR,
    DELETE_TRIP,
    TRIP_DELETED,
    DELETE_ERROR


  } from '../actions/tripActions';
  
  const initialState = {
    trips: [],
    singleTrip: {},
    tripError: '',
    isFetchingTrip: false,
    isFetchingSingle: false,
    isCreatingTrip: false,
    isEditingTrip: false,
    isDeletingTrip: false,
  };
  
  const TripReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TRIPS:
        return {
          ...state,
          isFetchingTrip: true,
        };
      case TRIPS:
        return {
          ...state,
          isFetchingTrip: false,
          trips: action.payload,
        };
      case TRIPS_ERROR:
        return {
          ...state,
          isFetchingTrip: false,
          postError: action.payload,
        };
      case CREATE_TRIP:
        return {
          ...state,
          isCreatingTrip: true,
        };
      case TRIP_CREATED:
        return {
          ...state,
          isCreatingTrip: false,
          trips: [...this.state.trips, action.payload],
        };
      case CREATE_ERROR:
        return {
          ...state,
          isCreatingTrip: false,
          tripError: action.payload,
        };
      case EDIT_TRIP:
        return {
          ...state,
          isEditingTrip: true,
        };
      case TRIP_EDITED:
        return {
          ...state,
          isEditingTrip: false,
          trips: this.state.trips.map(trip => (trip.id === action.payload.id ? { ...action.payload } : trip),),
        };
      case EDIT_ERROR:
        return {
          ...state,
          isEditingTrip: false,
          tripError: action.payload,
        };
      case DELETE_TRIP:
        return {
          ...state,
          isDeletingTrip: true,
        };
      case TRIP_DELETED:
        return {
          ...state,
          isDeletingTrip: false,
          trips: this.state.trips.filter(trip => trip.id !== action.payload.id),
        };
      case DELETE_ERROR:
        return {
          ...state,
          isDeletingTrip: false,
          tripError: action.payload,
        };
      case FETCH_SINGLE:
        return {
          ...state,
          isFetchingSingle: true,
        };
      case  SINGLE_FETCHED:
        return {
          ...state,
          isFetchingSingle: false,
          singleTrip: action.payload,
        };
      case SINGLE_ERROR:
        return {
          ...state,
          isFetchingSingle: false,
          tripError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default TripReducer;