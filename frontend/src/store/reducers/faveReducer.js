import {
    FETCH_FAVES,
    FAVES,
    FAVES_ERROR,
    CREATE_FAVE,
    FAVE_CREATED,
    CREATE_ERROR,
    DELETE_FAVE,
    FAVE_DELETED,
    DELETE_ERROR
  } from '../actions/favActions';
  
  const initialState = {
    faves: [],
    faveError: '',
    isFetchingFave: false,
    isCreatingFave: false,
    isDeletingFave: false,
  };
  
  const FaveReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FAVES:
        return {
          ...state,
          isFetchingFave: true,
        };
      case FAVES:
        return {
          ...state,
          isFetchingFave: false,
          trips: action.payload,
        };
      case FAVES_ERROR:
        return {
          ...state,
          isFetchingFave: false,
          faveError: action.payload,
        };
      case CREATE_FAVE:
        return {
          ...state,
          isCreatingFave: true,
        };
      case FAVE_CREATED:
        return {
          ...state,
          isCreatingFave: false,
          faves: [...this.state.faves, action.payload],
        };
      case CREATE_ERROR:
        return {
          ...state,
          isCreatingFave: false,
          faveError: action.payload,
        };
      case DELETE_FAVE:
        return {
          ...state,
          isDeletingFave: true,
        };
      case FAVE_DELETED:
        return {
          ...state,
          isDeletingFave: false,
          faves: this.state.faves.filter(faves => faves.id !== action.payload.id),
        };
      case DELETE_ERROR:
        return {
          ...state,
          isDeletingFave: false,
          faveError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default FaveReducer;