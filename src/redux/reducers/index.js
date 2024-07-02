import { combineReducers } from 'redux';
import Location from './locations';


const rootReducer = combineReducers({
    Location: Location,
});

export default rootReducer;