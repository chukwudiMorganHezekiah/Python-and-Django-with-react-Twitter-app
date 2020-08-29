import {ADD_TWEETLIST_ERROR} from '../../actions';
import {ADD_TWEETLIST_SUCCESS} from '../../actions';
import {ADD_TWEETLIST_REQUEST} from '../../actions';


const initialState ={
    loading:true,
    tweet:[],
    error:''
}
export default function(state = initialState, action){
    switch(action.type){
        case ADD_TWEETLIST_REQUEST:
            return {
                ...state,
                loading:true,
                tweet:[],
                error:''

            }
        case ADD_TWEETLIST_SUCCESS:
            return {
                ...state,
                loading:false,
                tweet:action.payload,
                error:''

            }
        case ADD_TWEETLIST_ERROR:
        return {
            ...state,
            loading:false,
            tweet:[],
            error:action.payload

        }
    default: return state
    }
}