import { combineReducers } from 'redux';
import SignUpReducer from './reducers/auth/SignUp';
import LoginReducer from './reducers/auth/Login';
import ErrorReducer from './reducers/errors/errors';
import LogoutReducer from './reducers/auth/logout';
import TweetListReducer from './reducers/Tweet/GetListList';
import AddTweetReducer from './reducers/Tweet/AddTweet'

export default  combineReducers({
    SignUpReducer,
    LoginReducer,
    LogoutReducer,
    ErrorReducer,
    TweetListReducer,
    AddTweetReducer

})