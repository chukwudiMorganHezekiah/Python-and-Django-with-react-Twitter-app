import { USER_REGISTER_REQUEST } from '../../actions';
import { USER_REGISTER_SUCCESS } from '../../actions';
import { USER_REGISTER_ERROR } from '../../actions';
const initialState ={
    user:[],
    error:[],
    loading:false
}

export default function(state = initialState, action){

    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                user:[],
                error:[],
                loading:true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                user:action.payload,
                error:[],
                loading:false
            }
        case USER_REGISTER_ERROR:
            return {
                ...state,
                user:[],
                error:action.payload,
                loading:false
            }
        default : return state
    }

}