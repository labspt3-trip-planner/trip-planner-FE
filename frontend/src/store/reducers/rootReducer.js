import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    trips: tripReducer,
    lists: listReducer
});

export default rootReducer;