import React, { Component } from 'react';
import '../../styles/style.css';
import { connect } from 'react-redux';
import addTweets from '../Redux/dispatches/AddTweet'

 class AddTweet extends Component {
     constructor(props){
         super(props);
         this.state = {
            tweet : ''
         }
     }
     handleChange =e =>{
         this.setState({
            [e.target.id]: e.target.value
         })
     }
     handleSubmit =(e)=>{
         if(this.state.tweet == ''){
             alert('Enter a tweet, please')

         }else{
             this.props.addTweet(this.state);
             this.setState({
                 tweet:''
             })

         }
     }
    render() {
        return (
            <div>
                <input type="text" onChange ={this.handleChange}  id="tweet" value={this.state.tweet} placeholder="Add New Tweet"/>
                <button className="btn btn-sm btn-primary" style={{ float:"right" }} onClick={this.handleSubmit}>Tweet</button>
                
            </div>
        )
    }
}
const mapStateToProps =state =>{
    return {
        tweet:state.TweetListReducer
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        addTweet: (data)=>{dispatch(addTweets(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTweet);