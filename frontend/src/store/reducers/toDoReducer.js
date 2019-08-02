import {
    FETCH_TODO_LIST,
    TODO,
    TODO_ERROR,
    FETCH_ONE,
    ONE_FETCHED,
    ONE_ERROR,
    CREATE_TODO_LIST,
    TODO_LIST_CREATED,
    TODO_LIST_ERROR,
    EDIT_TODO_LIST,
    TODO_LIST_EDITED,
    TODO_EDIT_ERROR,
    DELETE_TODO_LIST,
    TODO_LIST_DELETED,
    DELETE_TODO_ERROR
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
      case FETCH_TODO_LIST:
        return {
          ...state,
          isFetchingList: true,
        };
      case TODO:
        return {
          ...state,
          isFetchingList: false,
          lists: action.payload,
        };
      case TODO_ERROR:
        return {
          ...state,
          isFetchingList: false,
          listError: action.payload,
        };
      case CREATE_TODO_LIST:
        return {
          ...state,
          isCreatingList: true,
        };
      case TODO_LIST_CREATED:
        return {
          ...state,
          isCreatingList: false,
          lists: [...this.state.lists, action.payload],
        };
      case TODO_LIST_ERROR:
        return {
          ...state,
          isCreatingList: false,
          listError: action.payload,
        };
      case EDIT_TODO_LIST:
        return {
          ...state,
          isEditingList: true,
        };
      case TODO_LIST_EDITED:
        return {
          ...state,
          isEditingList: false,
          lists: this.state.lists.map(list => (list.id === action.payload.id ? { ...action.payload } : list)),
        };
      case TODO_EDIT_ERROR:
        return {
          ...state,
          isEditingList: false,
          listError: action.payload,
        };
      case DELETE_TODO_LIST:
        return {
          ...state,
          isDeletingList: true,
        };
      case TODO_LIST_DELETED:
        return {
          ...state,
          isDeletingLIST: false,
          lists: this.state.lists.filter(list => list.id !== action.payload.id),
        };
      case DELETE_TODO_ERROR:
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
  
  export default toDoReducer;