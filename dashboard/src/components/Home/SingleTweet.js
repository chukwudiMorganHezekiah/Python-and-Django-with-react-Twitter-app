import React, { Component } from 'react';
import '../../styles/style.css';
import fetch_params from '../helper_const/fetch_params';
import '../../styles/style.css'

 class SingleTweet extends Component {
     constructor(props){
         super(props);
         this.state= {
             loading:true,
             user:[],
             profile:[],
             likes:null,
             comments:null
         }
     }
     componentDidMount(){
         this.getSpecificUser()
         
     }
     getSpecificUser= ()=>{
         var token = localStorage.getItem('token');
         if(token){
            fetch(`/users/api/get_user/${this.props.tweet.user}/`,fetch_params('POST'))
            .then(res=>res.json())
            .catch(err=>{console.log(err.response.status)})
            .then(data=>{
                this.setState({
                    user:data.user,
                    profile:data.profile,
                    loading:false
                });
            });

            fetch(`/tweet/api/get_tweet_details/${this.props.tweet.id}/`,fetch_params('GET'))
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    likes:data.likes,
                    comments:data.comments
                })
            })
            .catch(err =>{console.log(err)})

         }

     }
    render() {
        return (
            <div>
                
                <div className="tweetlists">
                    
                    <div className="d-flex" style={{borderBottom: "1px solid #d4d1d1",marginBottom: "5px"}}>
                        {!this.state.loading && (
                            <>
                                <img src={this.state.profile.profile_image} alt={`profile image for ${this.state.user.username}`} style={{  width:"30px",height:"30px", borderRadius:"20px" }} />
                                <p>{ this.state.user.username }</p>
                            </>
                        )}
                        
                    </div>
                {this.props.tweet.tweet}
                <div className="d-flex">
                    <p style={{ fontSize: "12px", marginRight:"7px",color: "black" }}>{this.state.likes} <img src="/media/statics/kiss.svg" class="svgs" style={{marginTop: "-4px",marginRight: "1px" }} /> Likes </p>
                    <p style={{ fontSize: "12px",color: "black",marginLeft:"7px" }}>{this.state.comments} <img src="/media/statics/comment.svg" class="svgs" style={{marginTop: "-4px",marginRight: "1px" }} />Comments</p>
                </div>
                </div>
                    
                
            </div>
        )
    }
}
export default SingleTweet