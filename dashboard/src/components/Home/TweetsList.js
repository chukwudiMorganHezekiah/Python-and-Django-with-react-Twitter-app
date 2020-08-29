import React, { Component } from 'react';
import {connect} from 'react-redux'
import getTweets from '../Redux/dispatches/GetTweetList'
import SingleTweet from './SingleTweet';

 class TweetsList extends Component {
     constructor(props){
         super(props)
         this.state ={
             limit:3
         }
     }
     componentDidMount(){
         this.props.getTweets(this.state.limit);
     }

    render() {
        var content = this.props.tweets.loading ?(
            <h1>Tweets list</h1>
        ):(
            <>
            <h1>Tweets list</h1>
            </>
        )
        return (
            <div>
                {this.props.tweets.tweet_list.map(tweet =>{
                    return <SingleTweet key={tweet.id} tweet={tweet} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        tweets: state.TweetListReducer
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        getTweets : (limit)=>{dispatch(getTweets(limit))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);
