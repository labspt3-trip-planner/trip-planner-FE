import { combineReducers } from 'redux';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({
    trips: tripReducer
});

export default rootReducer;