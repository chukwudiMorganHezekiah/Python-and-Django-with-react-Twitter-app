import {GET_TWEETLIST_ERROR} from '../../actions';
import {GET_TWEETLIST_SUCCESS} from '../../actions';
import {GET_TWEETLIST_REQUEST} from '../../actions';

const initialState = {
    loading:true,
    tweet_list :[],
    error:null
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_TWEETLIST_REQUEST:
            return{
                ...state,
                loading:true,
                tweet_list :[],
                error:null

            }
        case GET_TWEETLIST_SUCCESS:
            return {
                ...state,
                loading:false,
                tweet_list:action.payload,
                error:null
            }
        case GET_TWEETLIST_ERROR:
            return{
                ...state,
                error:action.payload,
                loading:false,
                tweet_list:[]
            }
        default: return state
    }
}