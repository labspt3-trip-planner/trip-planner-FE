import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import listReducer from './listReducer';
import faveReducer from './faveReducer';

const rootReducer = combineReducers ({
    trips: tripReducer,
    lists: listReducer,
    favorites: faveReducer
});

export default rootReducer;