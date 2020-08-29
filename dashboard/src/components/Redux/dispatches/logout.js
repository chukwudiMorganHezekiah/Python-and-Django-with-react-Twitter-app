import { LOGOUT_USER_ERROR,LOGOUT_USER_REQUEST,LOGOUT_USER_SUCCESS } from '../actions';
export default ()=>{
    return dispatch =>{
        dispatch({
            type:LOGOUT_USER_REQUEST
        });
        fetch(`/auth/token/logout/`,{
            method:"POST",
            headers:{
                "Authorization":`Token ${localStorage.getItem('token')}`
            }
        })
        .then(()=>{
            dispatch({
                type:LOGOUT_USER_SUCCESS
            });
        })
        
    }
}