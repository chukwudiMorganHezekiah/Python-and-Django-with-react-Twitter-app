import { ERROR_OCCURED } from '../actions';
export default function(err){
    return dispatch =>{
        dispatch({
            type:ERROR_OCCURED,
            payload:err
        })
    }
}