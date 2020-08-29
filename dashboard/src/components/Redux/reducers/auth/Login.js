import { LOGIN_USER_ERROR } from '../../actions';
import { LOGIN_USER_SUCCESS } from '../../actions';
import { LOGIN_USER_REQUEST } from '../../actions';
const initialState = {
    token:'',
    loading:false,
    error:[],
    loggedIn:false
}

export default function (state = initialState, action){
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading:true,
                error:[],
                token:'',
                loggedIn:false
            }
        case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    error:[],
                    token:action.payload,
                    loggedIn:true
                }
        case LOGIN_USER_ERROR:
                    return {
                        ...state,
                        loading:false,
                        error:action.payload,
                        token:'',
                        loggedIn:false
                    }
        default: return state
}
}