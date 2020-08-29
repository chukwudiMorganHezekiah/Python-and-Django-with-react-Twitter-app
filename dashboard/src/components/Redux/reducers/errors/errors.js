import { ERROR_OCCURED } from '../../actions';

const initialState ={
    error_occured : false,
    error_msg : null
}

export default function (state = initialState, action){
    switch(action.type){
        case ERROR_OCCURED:
            return {
                ...state,
                error_occured : true,
                error_msg : action.payload
            }
        default: return state;
    }
}