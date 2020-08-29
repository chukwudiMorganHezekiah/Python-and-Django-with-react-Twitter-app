import { ADD_TWEETLIST_ERROR } from '../actions';
import { ADD_TWEETLIST_SUCCESS } from '../actions';
import { ADD_TWEETLIST_REQUEST } from '../actions';
import get_tweets from './GetTweetList'

export default function(data){
    return (dispatch, getState)=>{
        dispatch({
            type:ADD_TWEETLIST_REQUEST
        });
        var token = localStorage.getItem('token');
        if(token){
            fetch(`/tweet/api/add_tweet/`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json, text/plain, */*",
                    "Authorization":`Token ${token}`
                },
                body:JSON.stringify(data)
            })
            .then(
                res=> res.json()
            )
            .then(data =>{
                dispatch(get_tweets(4))
                
                dispatch({
                    type:ADD_TWEETLIST_SUCCESS,
                    payload:data
                });
            })
            .catch(err=>{
                dispatch({
                    type:ADD_TWEETLIST_ERROR,
                    payload:err.response.data
                })
            })

        }else{
            alert('error')
        }

        

    }

}