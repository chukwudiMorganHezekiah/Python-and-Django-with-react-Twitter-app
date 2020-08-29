import {GET_TWEETLIST_ERROR} from '../actions';
import {GET_TWEETLIST_SUCCESS} from '../actions';
import {GET_TWEETLIST_REQUEST} from '../actions';

export default function(limit){
    return dispatch =>{
        var token = localStorage.getItem('token');
        if(token){
            fetch(`/tweet/api/get_tweets_from_other_users/${limit}/`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json, text/plain, */*",
                    "Authorization":`Token ${token}`
                }
            }
            )
            .then(res =>res.json())
            .then(
                data=>{
                    
                    dispatch({
                        type:GET_TWEETLIST_SUCCESS,
                        payload:data
                    })
                }
                
            )
            .catch(err=>{
                console.log(err)
            })

        }
        

    }
}