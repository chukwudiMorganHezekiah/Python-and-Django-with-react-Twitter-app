import { LOGOUT_USER_ERROR, LOGOUT_USER_REQUEST,LOGOUT_USER_SUCCESS} from '../../actions';


const initialState ={
    loggedOut:false,
    loggoutError:'',
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loading:true,
                loggedOut:false,
                loggoutError:''

            }
    case LOGOUT_USER_SUCCESS:
        return {
            ...state,
            loading:false,
            loggedOut:true,
            loggoutError:''

        }
    case LOGOUT_USER_ERROR:
        return {
            ...state,
            loading:false,
            loggedOut:false,
            loggoutError:action.payload

        }
    default: return state;
        
    }
}