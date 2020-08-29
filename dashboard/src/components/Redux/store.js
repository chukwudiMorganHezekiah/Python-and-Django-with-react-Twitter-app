import Reduxthunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'



const initialstate ={}

const store =  createStore(
    rootReducers,
    initialstate,
    composeWithDevTools(applyMiddleware(Reduxthunk))
    

);

export default store