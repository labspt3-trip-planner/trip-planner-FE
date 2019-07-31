import {
    FETCH_PACKING_LIST,
    PACKING,
    PACKING_ERROR,
    FETCH_ONE,
    ONE_FETCHED,
    ONE_ERROR,
    CREATE_PACKING_LIST,
    PACKING_LIST_CREATED,
    PACKING_LIST_ERROR,
    EDIT_PACKING_LIST,
    PACKING_LIST_EDITED,
    PACKING_EDIT_ERROR,
    DELETE_PACKING_LIST,
    PACKING_LIST_DELETED,
    DELETE_PACKING_ERROR
  } from '../actions/packingActions';
  
  const initialState = {
    lists: [],
    singleList: {},
    listError: '',
    isFetchingList: false,
    isFetchingSingle: false,
    isCreatingList: false,
    isEditingList: false,
    isDeletingList: false,
  };
  
  const ListReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PACKING_LISTS:
        return {
          ...state,
          isFetchingList: true,
        };
      case PACKING:
        return {
          ...state,
          isFetchingList: false,
          lists: action.payload,
        };
      case PACKING_ERROR:
        return {
          ...state,
          isFetchingList: false,
          listError: action.payload,
        };
      case CREATE_PACKING_LIST:
        return {
          ...state,
          isCreatingList: true,
        };
      case PACKING_LIST_CREATED:
        return {
          ...state,
          isCreatingList: false,
          lists: [...this.state.lists, action.payload],
        };
      case PACKING_LIST_ERROR:
        return {
          ...state,
          isCreatingList: false,
          listError: action.payload,
        };
      case EDIT_PACKING_LIST:
        return {
          ...state,
          isEditingList: true,
        };
      case PACKING_LIST_EDITED:
        return {
          ...state,
          isEditingList: false,
          lists: this.state.lists.map(list => (list.id === action.payload.id ? { ...action.payload } : list)),
        };
      case PACKING_EDIT_ERROR:
        return {
          ...state,
          isEditingList: false,
          listError: action.payload,
        };
      case DELETE_PACKING_LIST:
        return {
          ...state,
          isDeletingList: true,
        };
      case PACKING_LIST_DELETED:
        return {
          ...state,
          isDeletingLIST: false,
          lists: this.state.lists.filter(list => list.id !== action.payload.id),
        };
      case DELETE_PACKING_ERROR:
        return {
          ...state,
          isDeletingList: false,
          listError: action.payload,
        };
      case FETCH_ONE:
        return {
          ...state,
          isFetchingSingle: true,
        };
      case  ONE_FETCHED:
        return {
          ...state,
          isFetchingSingle: false,
          singleList: action.payload,
        };
      case ONE_ERROR:
        return {
          ...state,
          isFetchingSingle: false,
          listError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default packingReducer;