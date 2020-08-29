import { USER_REGISTER_REQUEST} from '../actions';
import { USER_REGISTER_SUCCESS} from '../actions';
import { USER_REGISTER_ERROR} from '../actions';
import axios from 'axios'


export default data =>{
    return dispatch =>{
        dispatch({type:USER_REGISTER_REQUEST})
        axios.post('/auth/users/',data).then(res =>{
            dispatch({
                type:USER_REGISTER_SUCCESS,
                payload:res.data
            })

        }).catch(err=>{
            dispatch({
                type:USER_REGISTER_ERROR,
                payload:err.response.data
            })

        })
    }
}

