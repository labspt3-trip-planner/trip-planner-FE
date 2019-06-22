import {
    FETCH_LISTS,
    LISTS,
    LISTS_ERROR,
    FETCH_ONE,
    ONE_FETCHED,
    ONE_ERROR,
    CREATE_LIST,
    LIST_CREATED,
    LIST_ERROR,
    EDIT_LIST,
    LIST_EDITED,
    EDIT_ERROR,
    DELETE_LIST,
    LIST_DELETED,
    DELETE_ERROR
  } from '../actions/listActions';
  
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
      case FETCH_LISTS:
        return {
          ...state,
          isFetchingList: true,
        };
      case LISTS:
        return {
          ...state,
          isFetchingList: false,
          lists: action.payload,
        };
      case LISTS_ERROR:
        return {
          ...state,
          isFetchingList: false,
          listError: action.payload,
        };
      case CREATE_LIST:
        return {
          ...state,
          isCreatingList: true,
        };
      case LIST_CREATED:
        return {
          ...state,
          isCreatingList: false,
          lists: [...this.state.lists, action.payload],
        };
      case CREATE_ERROR:
        return {
          ...state,
          isCreatingList: false,
          listError: action.payload,
        };
      case EDIT_LIST:
        return {
          ...state,
          isEditingList: true,
        };
      case LIST_EDITED:
        return {
          ...state,
          isEditingList: false,
          lists: this.state.lists.map(list => (list.id === action.payload.id ? { ...action.payload } : list)),
        };
      case EDIT_ERROR:
        return {
          ...state,
          isEditingList: false,
          listError: action.payload,
        };
      case DELETE_LIST:
        return {
          ...state,
          isDeletingList: true,
        };
      case LIST_DELETED:
        return {
          ...state,
          isDeletingLIST: false,
          lists: this.state.lists.filter(list => list.id !== action.payload.id),
        };
      case DELETE_ERROR:
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
  
  export default ListReducer;