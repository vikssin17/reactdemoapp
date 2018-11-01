import { combineReducers } from 'redux';
import users from './simpleReducers';
export default combineReducers({
 users: users
});