
import { LOGIN_USER_REQUEST} from '../actions';
import { LOGIN_USER_SUCCESS} from '../actions';
import { LOGIN_USER_ERROR} from '../actions';
import axios from 'axios'
export default  data =>{
    return dispatch=>{
        dispatch({
            type:LOGIN_USER_REQUEST
        });

        axios.post('/auth/token/login/', data).then(res=>{
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:res.data.auth_token
            });
            localStorage.removeItem('token');
            localStorage.setItem('token',res.data.auth_token)

        }).catch(err=>{
            dispatch({
                type:LOGIN_USER_ERROR,
                payload:err.response.data
            })
        })
    }
}